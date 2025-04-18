import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Inspecciona y modifica el DOM',
    image: require('@site/static/img/triggersaurus_elements_panel.png').default,
    description: (
      <>
        Con el panel <strong>Elements</strong> puedes inspeccionar el árbol del DOM en tiempo real,
        modificar estilos CSS y ver cómo afecta inmediatamente al diseño de la página.
      </>
    ),
  },
  {
    title: 'Depura JavaScript fácilmente',
    image: require('@site/static/img/triggersaurus_breakpoints.png').default,
    description: (
      <>
        Usa el panel <strong>Sources</strong> para establecer breakpoints, observar el flujo del código
        y depurar errores directamente desde el navegador sin herramientas externas.
      </>
    ),
  },
  {
    title: 'Optimiza el rendimiento web',
    image: require('@site/static/img/triggersaurus_performance.png').default,
    description: (
      <>
        El panel <strong>Performance</strong> te permite registrar, analizar y mejorar el rendimiento de carga,
        interacción y renderizado de tu sitio web.
      </>
    ),
  },
];

function Feature({ image, title, description }) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img src={image} className={styles.featureImage} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
