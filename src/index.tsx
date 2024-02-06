/* @refresh reload */
import "xsg-player-sdk/dist/style.css";

import { SolidPlayer } from "xsg-player-sdk";
import { render } from "solid-js/web";

const App = () => {
  let videoRef: any = {};

  return (
    <>
      <div
        style={{
          "max-width": "800px",
          height: "200px",
          margin: "20px auto",
        }}
      >
        <SolidPlayer
          languages={[
            {
              label: "GEO",
              qualities: [
                {
                  label: "720p",
                  sources: [
                    {
                      src: "https://uploader.1tv.ge/1tvplay/demo/demo.mp3",
                    },
                  ],
                },
              ],
            },
          ]}
          type="audio"
          poster="https://picsum.photos/200"
          onFinished={() => console.log("finished")}
        />
      </div>
      <div
        style={{
          "max-width": "800px",
          margin: "20px auto",
        }}
      >
        <SolidPlayer
          ref={videoRef}
          type="video"
          controls={true}
          muted={false}
          autoplay={true}
          chromeCast
          poster="https://picsum.photos/200"
          languages={[
            {
              label: "GEO",
              title: "ყველაფერი ბიგ ოუს შესახებ",
              qualities: [
                {
                  label: "1080p",
                  sources: [
                    {
                      src: "https://uploader.1tv.ge/1tvplay/series/2021/1274/ge/64ff48a005b2e-1080p.mp4",
                    },
                  ],
                },
                {
                  label: "720p",
                  sources: [
                    {
                      src: "https://uploader.1tv.ge/1tvplay/series/2021/1274/ge/64ff53e88faee-720p.mp4",
                    },
                  ],
                },
                {
                  label: "480p",
                  sources: [
                    {
                      src: "https://uploader.1tv.ge/1tvplay/series/2021/1274/ge/64ff5d9256425-480p.mp4",
                    },
                  ],
                },
              ],
            },
            {
              label: "ENG",
              qualities: [
                {
                  label: "BigBuckBunny",
                  sources: [
                    {
                      src: "https://storage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
                    },
                  ],
                },
                {
                  label: "ForBiggerFun",
                  sources: [
                    {
                      src: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
                    },
                  ],
                },
              ],
            },
          ]}
          onFinished={() => console.log("finished")}
        />

        <div>
          <button
            type="button"
            onClick={() =>
              videoRef.isPlaying() ? videoRef.pause() : videoRef.play()
            }
          >
            Play/Pause
          </button>

          <button type="button" onClick={() => videoRef.fastForward()}>
            FastForward
          </button>
          <button type="button" onClick={() => videoRef.rewind()}>
            Rewind
          </button>
        </div>
      </div>

      <div
        style={{
          "max-width": "800px",
          margin: "20px auto",
        }}
      >
        <SolidPlayer
          type="video"
          controls
          muted={false}
          poster="https://picsum.photos/200"
          hls // <-- REQUIRED to enable HLS support
          languages={[
            {
              label: "GEO",
              qualities: [
                {
                  label: "480p",
                  sources: [
                    {
                      src: "https://tv.cdn.xsg.ge/gpb-1tv/index.m3u8",
                    },
                  ],
                },
              ],
            },
          ]}
          onFinished={() => console.log("finished")}
        />
      </div>
    </>
  );
};

const root = document.getElementById("root");

render(() => <App />, root!);
