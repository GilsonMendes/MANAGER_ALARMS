import {
  CornersIn,
  CornersOut,
  IconContext,
  Rocket,
  SignOut,
} from '@phosphor-icons/react'
import {
  ButtonNavStyled,
  NavContainerStyled,
  NavUserCardStyled,
  UserNavConfigCardStyled,
} from './navBar.styled'
import { useState } from 'react'

export function NavBar() {
  const [fullScreen, setFullScreen] = useState(false)
  const [userConfig, setUserConfig] = useState(false)

  function handleFullScreen() {
    setFullScreen((prev) => !prev)
    fullScreen
      ? document.exitFullscreen()
      : document.documentElement.requestFullscreen()
  }
  function handleUserConfig() {
    setUserConfig((prev) => !prev)
  }

  return (
    <NavContainerStyled>
      <abbr title="Logo">
        <ButtonNavStyled>
          <Rocket size={32} color="currentColor" />
        </ButtonNavStyled>
      </abbr>
      <div className="itensContainer">
        <ButtonNavStyled onClick={handleFullScreen}>
          <IconContext.Provider
            value={{
              size: 32,
              color: 'currentColor',
              weight: 'regular',
            }}
          >
            {fullScreen ? <CornersIn /> : <CornersOut />}
          </IconContext.Provider>
        </ButtonNavStyled>
        <NavUserCardStyled onClick={handleUserConfig} userConfig={userConfig}>
          <div className="imgPerf">
            <img
              src="https://scontent.fgyn16-1.fna.fbcdn.net/v/t1.6435-9/76909733_117932952993825_2506864100189929472_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=973b4a&_nc_ohc=-8C42BFYQ44AX990XBU&_nc_ht=scontent.fgyn16-1.fna&oh=00_AfBoIbO9gHZcpfFLkAiylZl7YFbNJl9ADgM8QqiHysd1DA&oe=64D18E7A"
              alt="perfil imagem"
            />
          </div>
          <div className="contentCard">
            <h3>Eduardo Queiroz</h3>
            <span>ADM master</span>
          </div>
          <UserNavConfigCardStyled userConfig={userConfig}>
            <IconContext.Provider
              value={{
                size: 16,
                weight: 'fill',
              }}
            >
              <ul>
                <li>
                  <SignOut />
                  Logout
                </li>
              </ul>
            </IconContext.Provider>
          </UserNavConfigCardStyled>
        </NavUserCardStyled>
      </div>
    </NavContainerStyled>
  )
}
