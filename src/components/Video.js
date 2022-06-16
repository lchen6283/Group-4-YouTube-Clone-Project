const Video = ({ video }) => {
  const { snippet, id } = video;
  const { thumbnails } = snippet;
  return <img src={thumbnails.high.url} alt={id.videoid} />
};

export default Video;
