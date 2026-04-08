#!/usr/bin/env python3
"""
Amenzo Studio — Pexels Asset Downloader
Downloads HD images and videos for demo sites using the Pexels API.

Usage:
  python download_assets.py --demo kova
"""

import os
import json
import time
import argparse
import requests

API_KEY = os.environ.get("PEXELS_API_KEY", "ARizECVfUDXSjyZwyq0qO9OuFzBOlBf6P9T7UWgYW78DEn7MttFDA3Xg")

HEADERS = {"Authorization": API_KEY}
BASE = "https://api.pexels.com/v1"
VIDEO_BASE = "https://api.pexels.com/videos"
USED_IDS_FILE = ".pexels_used_ids.json"


def load_used_ids():
    if os.path.exists(USED_IDS_FILE):
        with open(USED_IDS_FILE) as f:
            return set(json.load(f))
    return set()


def save_used_ids(ids):
    with open(USED_IDS_FILE, "w") as f:
        json.dump(list(ids), f)


def download_photo(query, filename, output_dir, used_ids, orientation="landscape", size="large"):
    params = {"query": query, "per_page": 10, "orientation": orientation, "size": size}
    resp = requests.get(f"{BASE}/search", headers=HEADERS, params=params)
    if resp.status_code != 200:
        print(f"  ✗ API error for '{query}': {resp.status_code}")
        return None
    for photo in resp.json().get("photos", []):
        if str(photo["id"]) not in used_ids:
            url = photo["src"]["large2x"]
            img_resp = requests.get(url)
            if img_resp.status_code == 200:
                with open(os.path.join(output_dir, filename), "wb") as f:
                    f.write(img_resp.content)
                used_ids.add(str(photo["id"]))
                print(f"  ✓ {filename} — ID:{photo['id']} — '{query}'")
                return photo["id"]
    print(f"  ✗ No unique match for '{query}'")
    return None


def download_video(query, filename, output_dir, used_ids):
    params = {"query": query, "per_page": 5, "size": "medium"}
    resp = requests.get(f"{VIDEO_BASE}/search", headers=HEADERS, params=params)
    if resp.status_code != 200:
        return None
    for video in resp.json().get("videos", []):
        if str(video["id"]) not in used_ids:
            files = sorted(video.get("video_files", []), key=lambda x: x.get("width", 0), reverse=True)
            for vf in files:
                if 1280 <= vf.get("width", 0) <= 1920:
                    vid_resp = requests.get(vf["link"])
                    if vid_resp.status_code == 200:
                        with open(os.path.join(output_dir, filename), "wb") as f:
                            f.write(vid_resp.content)
                        used_ids.add(str(video["id"]))
                        print(f"  ✓ {filename} — VID:{video['id']} — '{query}'")
                        return video["id"]
    return None


KOVA_ASSETS = {
    "images": [
        ("specialty coffee shop interior wooden counter barista", "hero.jpg", "landscape"),
        ("barista pouring latte art white cup close up", "about-barista.jpg", "landscape"),
        ("espresso shot glass crema close up dark", "menu-espresso.jpg", "square"),
        ("cappuccino latte art top view wooden table", "menu-cappuccino.jpg", "square"),
        ("pour over coffee glass dripper hand brewing", "menu-pourover.jpg", "portrait"),
        ("iced cold brew coffee glass ice cubes summer", "menu-coldbrew.jpg", "portrait"),
        ("roasted coffee beans burlap sack close up", "beans-hero.jpg", "landscape"),
        ("single origin coffee bag packaging craft paper", "beans-bag.jpg", "square"),
        ("fresh baked banana bread slice cafe plate", "food-banana-bread.jpg", "square"),
        ("avocado toast poached egg breakfast plate cafe", "food-avotoast.jpg", "square"),
        ("coffee shop menu board chalk espresso", "menu-hero.jpg", "landscape"),
        ("coffee beans roasting machine copper drum", "beans-roasting.jpg", "landscape"),
        ("cozy cafe corner window sunlight morning empty", "contact-hero.jpg", "landscape"),
    ],
    "videos": [
        ("espresso machine pouring coffee close up", "hero-video.mp4"),
        ("barista steaming milk coffee shop", "barista-clip.mp4"),
    ],
}

DEMOS = {"kova": ("Kova Coffee", KOVA_ASSETS)}


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("--demo", required=True, choices=DEMOS.keys())
    args = parser.parse_args()

    name, assets = DEMOS[args.demo]
    used_ids = load_used_ids()

    img_dir = f"public/images/{args.demo}"
    vid_dir = f"public/videos/{args.demo}"
    os.makedirs(img_dir, exist_ok=True)
    os.makedirs(vid_dir, exist_ok=True)

    print(f"\n{'='*50}\n  Downloading: {name}\n{'='*50}\n")
    for query, filename, orientation in assets["images"]:
        download_photo(query, filename, img_dir, used_ids, orientation=orientation)
        time.sleep(0.3)
    for query, filename in assets["videos"]:
        download_video(query, filename, vid_dir, used_ids)
        time.sleep(0.5)
    save_used_ids(used_ids)
    print(f"\n✅ Done — {img_dir}/, {vid_dir}/\n")


if __name__ == "__main__":
    main()
