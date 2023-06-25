// Primer grupo de sonidos
const firstSoundsGroup = [
    {
      keyCode: 81,
      key: 'Q',
      id: 'Heater-1',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'
    },
    {
      keyCode: 87,
      key: 'W',
      id: 'Heater-2',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3'
    },
    {
      keyCode: 69,
      key: 'E',
      id: 'Heater-3',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3'
    },
    {
      keyCode: 82,
      key: 'R',
      id: 'Heater-4',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3'
    },
    {
      keyCode: 65,
      key: 'A',
      id: 'Clap',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3'
    },
    {
      keyCode: 83,
      key: 'S',
      id: 'Open-HH',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3'
    },
    {
      keyCode: 68,
      key: 'D',
      id: "Kick-n'-Hat",
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3'
    },
    {
      keyCode: 70,
      key: 'F',
      id: 'Kick',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3'
    },
    {
      keyCode: 90,
      key: 'Z',
      id: 'Closed-HH',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3'
    },
    {
      keyCode: 88,
      key: 'X',
      id: "Kick-n'-Hat",
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3'
    },
    {
      keyCode: 67,
      key: 'C',
      id: 'Kick',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3'
    },
    {
      keyCode: 86,
      key: 'V',
      id: 'Closed-HH',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3'
    }
  ];

  // Segundo grupo de sonidos
const secondSoundsGroup = [
    {
      keyCode: 81,
      key: 'Q',
      id: 'Chord-1',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3'
    },
    {
      keyCode: 87,
      key: 'W',
      id: 'Chord-2',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3'
    },
    {
      keyCode: 69,
      key: 'E',
      id: 'Chord-3',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3'
    },
    {
      keyCode: 82,
      key: 'R',
      id: 'Shaker',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3'
    },
    {
      keyCode: 65,
      key: 'A',
      id: 'Open-HH',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3'
    },
    {
      keyCode: 83,
      key: 'S',
      id: 'Closed-HH',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3'
    },
    {
      keyCode: 68,
      key: 'D',
      id: 'Punchy-Kick',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3'
    },
    {
      keyCode: 70,
      key: 'F',
      id: 'Side-Stick',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3'
    },
    {
      keyCode: 90,
      key: 'Z',
      id: 'Snare',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3'
    },
    {
      keyCode: 88,
      key: 'X',
      id: "Kick-n'-Hat",
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3'
    },
    {
      keyCode: 67,
      key: 'C',
      id: 'Kick',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3'
    },
    {
      keyCode: 86,
      key: 'V',
      id: 'Closed-HH',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3'
    }
  ];

const soundsName = {
  heaterKit: "Naturaleza", // Nombre del primer grupo de sonidos
  smoothPianoKit: "Objetos"  // Nombre del segundo grupo de sonidos
};

const soundsGroup = {
  heaterKit: firstSoundsGroup,
  smoothPianoKit: secondSoundsGroup
}

// Componente para representar una tecla del teclado
const KeyboardKey = ({ play, deactivateAudio, sound: { id, key, url, keyCode } }) => {
  
  // Maneja el evento de presionar una tecla en el teclado
  const handleKeydown = (e) => {
    if(keyCode === e.keyCode) {
      const audio = document.getElementById(key);
      play(key, id); // Reproduce el sonido asociado a la tecla
      deactivateAudio(audio); // Desactiva el estilo de la tecla después de reproducir el sonido
    }
  }
  
  React.useEffect(() => {
      document.addEventListener('keydown', handleKeydown);
  }, [])

  return (
    <button value="test" id={keyCode} className="drum-pad" onClick={() => play(key, id)}>
      <audio className="clip" src={url} id={key} />
      {key}
    </button>
  );
}

  // Componente para representar el teclado de sonidos
const Keyboard = ({ sounds, play, power, deactivateAudio }) =>  (
  <div className="keyboard">
    {power 
      ? sounds.map((sound) => <KeyboardKey sound={sound} play={play} deactivateAudio={deactivateAudio} />)
      : sounds.map((sound) => <KeyboardKey sound={{...sound, url: "#" }} play={play} deactivateAudio={deactivateAudio} />)        
    }
  </div>
);

  // Componente para representar los controles del drum machine
const DumControle = ({ stop, name, power, volume, handleVolumeChange, changeSoundGroup }) => (
  <div className="controle">
    <button onClick={stop}>Power {power ? 'OFF' : 'ON'}</button>
    <h2>Volume: %{Math.round(volume * 100)}</h2>
    <input
      max="1"
      min="0"
      step='0.01'
      type="range"
      value={volume}
      onChange={handleVolumeChange}
      />
    <h2 id="display" >{name}</h2>
    <button onClick={changeSoundGroup}>Change Sounds Group</button>
  </div>
);

const App = () => {
  const [power, setPower] = React.useState(true);
  const [volume, setVolume] = React.useState(1);
  const [soundName, setSoundName] = React.useState("");
  const [soundType, setSoundType] = React.useState("heaterKit");
  const [sounds, setSounds] = React.useState(soundsGroup[soundType]);
  
  // Aplica estilo a la tecla activa
  const styleActiveKey = (key) => {
    key.parentElement.style.backgroundColor = "#000000"
    key.parentElement.style.color = "#ffffff"
  }
  
  // Desactiva el estilo de la tecla
  const deActivatedKey = (audio) => {
    audio.parentElement.style.backgroundColor = "#ffffff"
    audio.parentElement.style.color = "#000000"
  }
 
  // Desactiva el estilo de la tecla después de un tiempo determinado
 const deactivateAudio = (audio) => {
   setTimeout(() => {
     audio.parentElement.style.backgroundColor = "#ffffff"
     audio.parentElement.style.color = "#000000"
   }, 300)
 }

  // Reproduce el sonido asociado a la tecla y establece el nombre del sonido
  const play = (key, sound) => {
    setSoundName(sound)
    const audio = document.getElementById(key);
    styleActiveKey(audio);  // Aplica estilo a la tecla activa
    audio.currentTime = 0;
    audio.play();
    deactivateAudio(audio)  // Desactiva el estilo de la tecla después de reproducir el sonido
  }

  // Detiene o activa el drum machine
  const stop = () => {
     setPower(!power)
  }
  
  // Cambia entre los grupos de sonidos disponibles
  const changeSoundGroup = () => {
    setSoundName("")
    if(soundType === "heaterKit"){
        setSoundType("smoothPianoKit");
        setSounds(soundsGroup.smoothPianoKit);
    } else {
        setSoundType("heaterKit");
        setSounds(soundsGroup.heaterKit);
    }
  }
  
  // Maneja el cambio de volumen
  const handleVolumeChange = e => {
    setVolume(e.target.value)
  }
  
  // Establece el volumen de todas las teclas de sonido
  const setKeyVolume = () => {
    const audioes = sounds.map(sound => document.getElementById(sound.key));
    audioes.forEach(audio => {
      if(audio) {
        audio.volume = volume;
      }
    }) 
  }
  
  return (
    <div id="drum-machine">
      {setKeyVolume()}
      <div className="wrapper">
        <Keyboard sounds={sounds} play={play} power={power} deactivateAudio={deactivateAudio} />
        <DumControle 
          stop={stop}
          power={power}
          volume={volume} 
          name={soundName || soundsName[soundType]} 
          changeSoundGroup={changeSoundGroup}
          handleVolumeChange={handleVolumeChange} 
         />
      </div>
    </div>
  )
};

ReactDOM.render(<App />, document.querySelector("#app"))