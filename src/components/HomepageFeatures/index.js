import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';

const FeatureList = [
  {
    title: '乱数調整Wikiとは?',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        ポケモンの乱数調整に関する知識を集約する目的で作られた、
        Pokémon RNG Japan Discordメンバーが運営するWikiです。
      </>
    ),
  },
  {
    title: '各世代の乱数調整を調べたい',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        <Link to="/docs/intro">Wikiトップ</Link>から世代別のページにアクセスできます。
      </>
    ),
  },
  {
    title: 'このWikiに貢献したい',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        <Link to="https://discord.com/invite/TwjZmRg">Pokémon RNG Japan Discord</Link>にて、査読や提案を随時受け付けています。
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
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
