import React, { memo } from 'react'
import { FooterWrapper } from './styled'
import footerData from '@/assets/data/footer.json'

const appfooter = memo(() => {
  return (
    <FooterWrapper>
      <div className="wrapper">
        <div className="service">
          {footerData.map((item, index) => {
            return (
              <div className="item" key={index}>
                <div className="subtitle">{item.name}</div>
                <div className="info">
                  {item.list.map((infoItem, index) => {
                    return <div className="infoItem" key={index}>{infoItem}</div>
                  })}
                </div>
              </div>
            )
          })}
        </div>
        <div className="term">© 2023 Airbnb, Inc. All rights reserved.条款 · 隐私政策 · 网站地图 · 全国旅游投诉渠道 12301</div>
      </div>
    </FooterWrapper>
  )
})

export default appfooter