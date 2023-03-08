import ReactPlayer from 'react-player'


interface IReactPlayer {
    imageUrl : string | undefined
}

const ReactPlayerComp = ({ imageUrl }: IReactPlayer) => {

  return (
      <div className='w-full'>
          <ReactPlayer
              url={imageUrl}
              muted={true}
              loop={true}
              playing={true}
              volume={0.01}
              controls={false}
              width='100%'
          />
      </div>
  )
}

export default ReactPlayerComp