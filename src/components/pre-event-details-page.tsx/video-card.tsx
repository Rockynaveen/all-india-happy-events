import { videoData } from "../../data/pre-event-photographer/pre-event-details/video-data";

const VideoSection = () => {
  return (
    <div className="card-shadow pos-rel">
      
      <a id="videos" className="anchor-fake"></a>

      <div className="card-shadow-header">
        <h3>
          <i className="fa fa-video-camera"></i> Videos
        </h3>
      </div>

      <div className="card-shadow-body">
        <div className="vendor-video">
          <a
            className="popup-video"
            href={videoData.videoUrl}
          >
            <i className="fa fa-play"></i>

            <img
              src={videoData.thumbnail}
              alt="video-thumbnail"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default VideoSection;