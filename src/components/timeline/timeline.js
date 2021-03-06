import React from 'react';
import { Timeline, TimelineItem } from 'vertical-timeline-component-for-react';
import Moment from 'react-moment';

export default function PbTimeline({ results, setSearch }) {
  return (
    <>
      <div className="tl-header">
        <h1>Timeline of Recent Events</h1>
      </div>
      <Timeline lineColor={'#ddd'} className="pbTimeline">
        {results.map(item => (
          <TimelineItem
            key={item.id}
            dateText={<Moment format="LL">{item.date}</Moment>}
            style={{ color: '#bc541e' }}
            dateInnerStyle={{ color: 'white', backgroundColor: '#003767' }}
          >
            <h3>
              <a href={item.links[0]}>{item.title}</a>
            </h3>
            <h4>
              {item.city}, {item.state}
            </h4>
            <div className="tag-container">
              {item.tags.map(element => (
                <span className="timeline-tags">{element}</span>
              ))}
            </div>
            <div className="timeline-links">
              {item.links.splice(0, 3).map(element => (
                <a href={element} className="link-button">
                  Source
                </a>
              ))}
            </div>
          </TimelineItem>
        ))}
      </Timeline>
    </>
  );
}
