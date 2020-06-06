import React from 'react'

function buildMicrofrontend({ host, name, container }) {
  return function Microfrontend({ history }) {

    function renderMicrofrontend() {
      window[`render${name}`]({ container, history })
    }

    React.useEffect(() => {
      const scriptId = `${name}-${container}`;

      if (document.getElementById(scriptId)) {
        renderMicrofrontend();
        return;
      }

      fetch(`${host}/asset-manifest.json`)
        .then(response => response.json())
        .then(assets => assets.files['main.js'])
        .then(mainJS => {
          const script = document.createElement('script');
          script.id = scriptId
          script.crossOrigin = '';
          script.src = `${host}${mainJS}`
          script.onload = renderMicrofrontend
          document.head.appendChild(script)
        })

        return () => {
          window[`unmount${name}`](container)
        }
    }, [])

    return <main id={container} className={`container-${container}`} />
  }
}

export default buildMicrofrontend;
