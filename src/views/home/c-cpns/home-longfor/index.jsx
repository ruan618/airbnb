import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { LongForSectionWrapper } from './styled'
import LongForItem from '@/components/longfor-item';
import SectionHeader from '@/components/section-header';
import ScrollView from '@/base-ui/scroll-view';
// import ScrollView from '@/base-ui/scroll-view';

const LongForSection = memo((props) => {
  const { sectionData } = props;
  return (
    <LongForSectionWrapper>
      <SectionHeader title={ sectionData.title } subtitle={ sectionData.subtitle }/>
      <div className='longfor_items'>
        <ScrollView>
          {
            sectionData.list.map((item, index) => {
              return (<LongForItem key={index} item={item}/>)
            })
          }
        </ScrollView>
      </div>
    </LongForSectionWrapper>
  )
})

LongForSection.propTypes = {
  sectionData: PropTypes.object
}

export default LongForSection