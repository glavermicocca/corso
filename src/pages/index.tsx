import type { NextPage } from 'next'

import MyUseEffect from '../basicHooks/MyUseEffect'
import MyUseEffectOtherCase from '../basicHooks/MyUseEffectOtherCase'
import MyUseState from '../basicHooks/MyUseState'
import MyUseMemo from '../basicHooks/MyUseMemo'
import MyUseCallback from '../basicHooks/MyUseCallback'
import { createContext } from 'react'
import ChildComponentWrapper from '../genericComponents/ChildComponentWrapper'
import ChildComponent from '../genericComponents/ChildComponent'
import MyUseReducer from '../basicHooks/MyUseReducer'
import MyUseRef from '../basicHooks/MyUseRef'
import MyUseRefInput from '../basicHooks/MyUseRefInput'

export const AppContext = createContext(0)

const IndexPage: NextPage = () => {
  return (
    <>
      <AppContext.Provider value={42}>
        {/* <MyUseState /> */}
        {/* <MyUseEffect /> */}
        {/* <MyUseEffectOtherCase /> */}
        {/* <MyUseMemo /> */}
        {/* <MyUseCallback /> */}
        {/* <MyUseReducer/> */}
        {/* <MyUseRef /> */}
        <MyUseRefInput />
        <ChildComponentWrapper label="1">
          <ChildComponentWrapper label="2">
            <ChildComponentWrapper label="3">
              <ChildComponent />
            </ChildComponentWrapper>
          </ChildComponentWrapper>
        </ChildComponentWrapper>
      </AppContext.Provider>
    </>
  )
}

export default IndexPage
