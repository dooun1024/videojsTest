import { Component, ElementRef, ViewChild, AfterViewInit, OnDestroy } from '@angular/core';
import videojs from 'video.js';

const VIDEO_URL = 'https://d2vhewpleaw8h9.cloudfront.net/hls_videos/sample.m3u8';

@Component({
  selector: 'app-video-player',
  standalone: true,
  imports: [],
  templateUrl: './video-player.component.html',
  styleUrl: './video-player.component.css'
})
export class VideoPlayerComponent implements AfterViewInit, OnDestroy {
  @ViewChild('videoEl') videoEl!: ElementRef<HTMLVideoElement>;

  private player: ReturnType<typeof videojs> | null = null;

  readonly videoUrl = VIDEO_URL;
  readonly configItems = [
    {
      label: 'video.js 版本',
      value: '8.0.4',
      badge: null,
      hint: ''
    },
    {
      label: '视频地址',
      value: VIDEO_URL,
      badge: null,
      hint: ''
    },
    {
      label: 'html5.vhs.withCredentials',
      value: null,
      badge: 'true',
      hint: 'VHS (HLS/DASH) 分片请求携带 Cookie'
    },
    {
      label: '请求类型',
      value: null,
      badge: 'XHR (VHS)',
      hint: 'HLS 分片由 video.js VHS 通过 XHR 拉取，withCredentials 完整生效'
    }
  ];

  ngAfterViewInit(): void {
    const options = {
      controls: true,
      autoplay: false,
      preload: 'auto',
      fluid: true,
      crossOrigin: 'use-credentials',
      sources: [
        {
          src: VIDEO_URL,
          type: 'application/x-mpegURL'
        }
      ],
      html5: {
        vhs: {
          withCredentials: true
        },
        hls: {
          withCredentials: true
        }
      }
    };

    this.player = videojs(this.videoEl.nativeElement, options);
  }

  ngOnDestroy(): void {
    this.player?.dispose();
  }
}
