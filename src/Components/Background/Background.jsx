import './Background.css'
import image1 from '../../assets/149740B68C0F4AC8BB4D99B5A52D7AB4.webp'
import image2 from '../../assets/525CF14DB8D744ED87C781DFD550EC37_D9081EA4AB3D43AB889A9E9B9A5B056B_00X_Easy-Model-Selector_13_CL16Z20IX0001_1_GL_5_175_rgb.avif'
import image3 from '../../assets/C89D17520DED4146BA058746BEAF3502.webp'
import image4 from '../../assets/CA141E55F8C241A99AF3501BFDF3FF90.webp'
import image5 from '../../assets/F37C21DB85FB4547A771546059EAE61B.webp'

const Background = ({playStatus, heroCount}) => {
  if (heroCount === 0)
  {
    return <img src={image1} className='background fade-in' alt='' />
  }
  else if (heroCount === 1)
    {
      return <img src={image2} className='background fade-in' alt='' />
    }
  else if (heroCount === 2)
    {
      return <img src={image3} className='background fade-in' alt='' />
    }
  else if (heroCount === 3)
    {
      return <img src={image4} className='background fade-in' alt='' />
    }
  else if (heroCount === 4)
    {
      return <img src={image5} className='background fade-in' alt='' />
    }

}

export default Background