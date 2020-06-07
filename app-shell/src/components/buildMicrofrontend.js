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
        .then(assets => ({
          js: assets.files['main.js'],
          css: assets.files['main.css'],
        }))
        .then(({ js, css }) => {
          const script = document.createElement('script');
          const styles = document.createElement('link');

          styles.href = `${host}${css}`;
          styles.rel = 'stylesheet';

          script.id = scriptId;
          script.crossOrigin = '';
          script.src = `${host}${js}`;
          script.onload = renderMicrofrontend;

          document.head.appendChild(styles);
          document.head.appendChild(script);
        })

        return () => {
          window[`unmount${name}`](container)
        }
    }, [])

    return <main id={container} className={`container-${container}`} />
  }
}

export default buildMicrofrontend;
