// @flow
import React from 'react';
import moment from 'moment';
import type { Edges } from '../../types';
import styles from './ProjectFeed.module.scss';

type Props = {
  edges: Edges
};

const ProjectFeed = ({ edges }: Props) => (
  <div className={styles['project-feed']}>
    <h1 className={styles['project-feed__h1']}>Projects</h1>
    {edges.map((edge) => (
      <div className={styles['project-feed__item']} key={edge.node.fields.slug}>
        <div className={styles['project-feed__item-meta']}>
          <time className={styles['project-feed__item-meta-time']} dateTime={moment(edge.node.frontmatter.date).format('MMMM D, YYYY')}>
            {moment(edge.node.frontmatter.date).format('MMMM YYYY')}
          </time>
        </div>
        <h2 className={styles['project-feed__item-title']}>
          <div className={styles['project-feed__item-title-link']}>{edge.node.frontmatter.title}</div>
        </h2>
        <div className={styles['project-feed__item-content']}>
          <p>{edge.node.frontmatter.description}</p>
          <div className={styles['project-feed__item-content-body']} dangerouslySetInnerHTML={{ __html: edge.node.html }}/>
          <div className={styles['project-feed__item-content-description']}>
            <p>Technologies Used: <span className={styles['project-feed__item-content-description-technologies']}>{edge.node.frontmatter.category}</span></p>
            <div>
              {/* GitHub SVG */}
              <a className={styles['project-feed__item-content-description-github']} href={`${edge.node.frontmatter.slug}`} target="_blank">
                <svg xmlns="https://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                <span>GitHub Source</span>
              </a>
              <a className={styles['project-feed__item-content-description-link']} href={`${edge.node.frontmatter.tags}`} target="_blank">
                <span>Link to Project Website</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    ))}
  </div>
);

export default ProjectFeed;
