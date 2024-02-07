import React, { memo, useEffect, useState } from 'react'
import { RightWrapper } from './styled'
import IconLang from '@/assets/svg/icon_language'
import IconDetail from '@/assets/svg/icon_detail'
import IconAvatar from '@/assets/svg/icon_avatar'

const headerRight = memo(() => {
  const [ showPanel, setShowPanel] = useState(false);

  useEffect(() => {
    function windowClick() {
      setShowPanel(false)
    }

    window.addEventListener('click', windowClick)
    return (() => {
      window.removeEventListener('click', windowClick)
    })
  }, []) 
  
  function showPanelHandle(e) {
    e.stopPropagation();
    setShowPanel(!showPanel)
  }
  return (
    <RightWrapper>
      <div className='menu'>
        <div className='btns'>
          <span className='btn'>登录</span>
          <span className='btn'>注册</span>
          <span className='btn'><IconLang></IconLang></span>
        </div>
        <div className='profile' onClick={e => showPanelHandle(e)}>
          <IconDetail/>
          <IconAvatar/>
          { showPanel && (
            <div className="panel">
              <div className="panel-top">
                <div className="item register">注册</div>
                <div className="item log">登录</div>
              </div>
              <div className="panel-bottom">
                <div className="item">帮助中心</div>
              </div>
          </div>
          )}
        </div>
      </div>
    </RightWrapper>
  )
})

export default headerRight