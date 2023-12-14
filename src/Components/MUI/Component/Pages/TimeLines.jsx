import React from 'react'
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineContent from '@mui/lab/TimelineContent';
function TimeLines() {
  return (
    <>
<Timeline position='left'>
    <TimelineItem>
        <TimelineSeparator>
            <TimelineDot color='secondary' variant='outlined' />
            <TimelineConnector/>
        </TimelineSeparator>

        <TimelineContent>
            City A 
        </TimelineContent>

    </TimelineItem> color='secondary' 
    <TimelineItem>
        <TimelineSeparator>
            <TimelineDot color='secondary' variant='outlined' />
            <TimelineConnector/>
        </TimelineSeparator>

        <TimelineContent>
            City B 
        </TimelineContent>

    </TimelineItem>
    <TimelineItem>
        <TimelineSeparator>
            <TimelineDot color='secondary' variant='outlined' />
        </TimelineSeparator>
        <TimelineContent>
            City C 
        </TimelineContent>

    </TimelineItem>
</Timeline>
    </>

  )
}

export default TimeLines