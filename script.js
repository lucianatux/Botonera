// Primer grupo de sonidos
const firstSoundsGroup = [
    {
      keyCode: 81,
      key: 'Q',
      id: 'Trueno',
      url: '../assets/trueno.mp3'
    },
    {
      keyCode: 87,
      key: 'W',
      id: 'Lluvia',
      url: '../assets/lluvia.mp3'
    },
    {
      keyCode: 69,
      key: 'E',
      id: 'Neblina',
      url: '../assets/neblina.mp3'
    },
    {
      keyCode: 82,
      key: 'R',
      id: 'Viento',
      url: '../assets/viento.mp3'
    },
    {
      keyCode: 65,
      key: 'A',
      id: 'Toc-toc',
      url: '../assets/toctoc.mp3'
    },
    {
      keyCode: 83,
      key: 'S',
      id: 'Timbre',
      url: '../assets/timbre.mp3'
    },
    {
      keyCode: 68,
      key: 'D',
      id: "Subir escalera",
      url: '../assets/subirescalera.mp3'
    },
    {
      keyCode: 70,
      key: 'F',
      id: 'Bajar escalera',
      url: '../assets/bajarescalera.mp3'
    },
    {
      keyCode: 90,
      key: 'Z',
      id: 'Ventana rota',
      url: '../assets/ventanarota.mp3'
    },
    {
      keyCode: 88,
      key: 'X',
      id: "Cadena inodoro",
      url: '../assets/cadenainodoro.mp3'
    },
    {
      keyCode: 67,
      key: 'C',
      id: 'Goteo',
      url: '../assets/goteo.mp3'
    },
    {
      keyCode: 86,
      key: 'V',
      id: 'Abrir puerta',
      url: '../assets/abrirpuerta.mp3'
    }
  ];

  // Segundo grupo de sonidos
const secondSoundsGroup = [
    {
      keyCode: 81,
      key: 'Q',
      id: 'Piedrazo a la ventana',
      url: '../otros/piedrazoalaventana.mp3'
    },
    {
      keyCode: 87,
      key: 'W',
      id: 'Cerrar puerta',
      url: '../otros/cerrarpuerta.mp3'
    },
    {
      keyCode: 69,
      key: 'E',
      id: 'Empujar puerta',
      url: '../otros/empujarpuerta.mp3'
    },
    {
      keyCode: 82,
      key: 'R',
      id: 'Haciendo pis',
      url: '../otros/haciendopis.mp3'
    },
    {
      keyCode: 65,
      key: 'A',
      id: 'Canarios',
      url: '../otros/canarios.mp3'
    },
    {
      keyCode: 83,
      key: 'S',
      id: 'Calandria',
      url: '../otros/calandria.mp3'
    },
    {
      keyCode: 68,
      key: 'D',
      id: 'Otra lluvia',
      url: '../otros/otralluvia.mp3'
    },
    {
      keyCode: 70,
      key: 'F',
      id: 'Chiflido de viento',
      url: '../otros/chiflidodeviento.mp3'
    },
    {
      keyCode: 90,
      key: 'Z',
      id: 'Grillos',
      url: '../otros/grillos.mp3'
    },
    {
      keyCode: 88,
      key: 'X',
      id: "Encender fogata",
      url: '../otros/encenderfogata.mp3'
    },
    {
      keyCode: 67,
      key: 'C',
      id: 'Aleteo Pájaros',
      url: '../otros/aleteopajaros.mp3'
    },
    {
      keyCode: 86,
      key: 'V',
      id: 'Mosca',
      url: '../otros/mosca.mp3'
    }
  ];

const soundsName = {
  firstKit: "Casa mutante", // Nombre del primer grupo de sonidos
  secondKit: "Otros"  // Nombre del segundo grupo de sonidos
};

const soundsGroup = {
  firstKit: firstSoundsGroup,
  secondKit: secondSoundsGroup
}

const KeyboardKey = ({ play, sound: { id, key, url, keyCode } }) => {
  const [isPlaying, setIsPlaying] = React.useState(false);

  const handleKeydown = (e) => {
    if (keyCode === e.keyCode) {
      const audio = document.getElementById(key);
      if (!isPlaying) {
        play(key, id);
        setIsPlaying(true);
      } else {
        audio.pause();
        audio.currentTime = 0;
        setIsPlaying(false);
      }
    }
  };

  // Restablecer el estado cuando cambia el sonido
  React.useEffect(() => {
    setIsPlaying(false);
  }, [id]);
  
  React.useEffect(() => {
    document.addEventListener('keydown', handleKeydown);
}, [])

return (
  <button value="test" id={keyCode} className="drum-pad" onClick={() => play(key, id)}>
    <audio className="clip" src={url} id={key} />
    
    <div className="button-text">
      <span className="button-title">{id}</span>
    </div>
  </button>
);
};


  // Componente para representar el teclado de sonidos
const Keyboard = ({ sounds, play, power }) =>  (
  <div className="keyboard">
    {power 
      ? sounds.map((sound) => <KeyboardKey sound={sound} play={play}  />)
      : sounds.map((sound) => <KeyboardKey sound={{...sound, url: "#" }} play={play}  />)        
    }
  </div>
);

  // Componente para representar los controles del drum machine
const DumControle = ({ stop, name, power, volume, handleVolumeChange, changeSoundGroup }) => (
  <div className="controle">
    <button onClick={stop}>Power: {power ? 'ON' : 'OFF'}</button>
    <h2>Volume: %{Math.round(volume * 100)}</h2>
    <input
      max="1"
      min="0"
      step='0.01'
      type="range"
      value={volume}
      onChange={handleVolumeChange}
      style={{ backgroundColor: '#f3f3f3',
      WebkitAppearance: 'none', /* Para navegadores webkit */
      MozAppearance: 'none' /* Para navegadores basados en Gecko */}}
      />
    <h2 id="display" >{name}</h2>
    <button onClick={changeSoundGroup}>Change Sounds Group</button>
  </div>
);

const App = () => {
  const [power, setPower] = React.useState(true);
  const [volume, setVolume] = React.useState(1);
  const [soundName, setSoundName] = React.useState("");
  const [soundType, setSoundType] = React.useState("firstKit");
  const [sounds, setSounds] = React.useState(soundsGroup[soundType]);
  const [isPlaying, setIsPlaying] = React.useState(false);

  
   // Reproduce el sonido asociado a la tecla y establece el nombre del sonido
  const play = (key, sound) => {
    setSoundName(sound);
    const audio = document.getElementById(key);
    if (!isPlaying) {
      audio.currentTime = 0;
      audio.play();
      setIsPlaying(true);
    } else {
      audio.pause();
      audio.currentTime = 0;
      setIsPlaying(false);
    }
  };
  

  // Detiene o activa el drum machine
  const stop = () => {
     setPower(!power)
  }
  
  // Cambia entre los grupos de sonidos disponibles
  const changeSoundGroup = () => {
    setSoundName("");
    if (soundType === "firstKit") {
      setSoundType("secondKit");
      setSounds(soundsGroup.secondKit);
      // Cambia el color de fondo de los botones cuando se activa el "secondKit"
      const drumPadButtons = document.querySelectorAll(".drum-pad");
      drumPadButtons.forEach((button) => {
        button.style.backgroundColor = "#3c0877"; // Cambia el color de fondo a rojo
      });
    } else {
      setSoundType("firstKit");
      setSounds(soundsGroup.firstKit);
      // Restaura el color de fondo original de los botones cuando se activa el "firstKit"
      const drumPadButtons = document.querySelectorAll(".drum-pad");
      drumPadButtons.forEach((button) => {
        button.style.backgroundColor = "#09164d"; // Restaura el color de fondo original
      });
    }
  };
  
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
        <Keyboard sounds={sounds} play={play} power={power}  />
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