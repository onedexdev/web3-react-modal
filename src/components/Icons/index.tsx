import React from 'react'
import styles from '../../styles.module.css'

const BaseIcon = (props: any) => {
  return (
    <span role='img' className={styles.icon} {...props}>
      {props.children}
    </span>
  )
}

export const MetamaskIcon = (props: any) => (
  <BaseIcon {...props}>
    <svg
      height='355'
      viewBox='0 0 397 355'
      width='397'
      xmlns='http://www.w3.org/2000/svg'
    >
      <g fill='none' fillRule='evenodd' transform='translate(-1 -1)'>
        <path
          d='m114.622644 327.195472 52.004717 13.810198v-18.05949l4.245283-4.249292h29.716982v21.246459 14.872523h-31.839624l-39.268868-16.997169z'
          fill='#cdbdb2'
        />
        <path
          d='m199.528305 327.195472 50.943397 13.810198v-18.05949l4.245283-4.249292h29.716981v21.246459 14.872523h-31.839623l-39.268868-16.997169z'
          fill='#cdbdb2'
          transform='matrix(-1 0 0 1 483.96227 0)'
        />
        <path
          d='m170.872644 287.889523-4.245283 35.056657 5.306604-4.249292h55.18868l6.367925 4.249292-4.245284-35.056657-8.490565-5.311615-42.452832 1.062323z'
          fill='#393939'
        />
        <path
          d='m142.216984 50.9915022 25.471698 59.4900858 11.674528 173.158643h41.391511l12.735849-173.158643 23.349056-59.4900858z'
          fill='#f89c35'
        />
        <path
          d='m30.7783023 181.657226-29.71698153 86.048161 74.29245393-4.249293h47.7594343v-37.181303l-2.122641-76.487253-10.613208 8.498583z'
          fill='#f89d35'
        />
        <path
          d='m87.0283032 191.218134 87.0283028 2.124646-9.551886 44.617563-41.391511-10.623229z'
          fill='#d87c30'
        />
        <path
          d='m87.0283032 192.280457 36.0849058 33.994334v33.994334z'
          fill='#ea8d3a'
        />
        <path
          d='m123.113209 227.337114 42.452831 10.623229 13.79717 45.679888-9.551886 5.311615-46.698115-27.620398z'
          fill='#f89d35'
        />
        <path
          d='m123.113209 261.331448-8.490565 65.864024 56.25-39.305949z'
          fill='#eb8f35'
        />
        <path
          d='m174.056606 193.34278 5.306604 90.297451-15.919812-46.211049z'
          fill='#ea8e3a'
        />
        <path
          d='m74.2924539 262.393771 48.8207551-1.062323-8.490565 65.864024z'
          fill='#d87c30'
        />
        <path
          d='m24.4103777 355.878193 90.2122663-28.682721-40.3301901-64.801701-73.23113313 5.311616z'
          fill='#eb8f35'
        />
        <path
          d='m167.688682 110.481588-45.636793 38.243627-35.0235858 42.492919 87.0283028 3.186969z'
          fill='#e8821e'
        />
        <path
          d='m114.622644 327.195472 56.25-39.305949-4.245283 33.994334v19.121813l-38.207548-7.43626z'
          fill='#dfcec3'
        />
        <path
          d='m229.245286 327.195472 55.18868-39.305949-4.245283 33.994334v19.121813l-38.207548-7.43626z'
          fill='#dfcec3'
          transform='matrix(-1 0 0 1 513.679252 0)'
        />
        <path
          d='m132.665096 212.464593-11.674528 24.433427 41.39151-10.623229z'
          fill='#393939'
          transform='matrix(-1 0 0 1 283.372646 0)'
        />
        <path
          d='m23.349057 1.06232296 144.339625 109.41926504-24.410378-59.4900858z'
          fill='#e88f35'
        />
        <path
          d='m23.349057 1.06232296-19.10377392 58.42776294 10.61320772 63.7393781-7.42924541 4.249292 10.61320771 9.560906-8.49056617 7.436261 11.67452847 10.623229-7.4292454 6.373938 16.9811323 21.246459 79.5990577-24.433428c38.915096-31.161473 58.018869-47.096318 57.311322-47.804533-.707548-.708215-48.820756-37.1813036-144.339625-109.41926504z'
          fill='#8e5a30'
        />
        <g transform='matrix(-1 0 0 1 399.056611 0)'>
          <path
            d='m30.7783023 181.657226-29.71698153 86.048161 74.29245393-4.249293h47.7594343v-37.181303l-2.122641-76.487253-10.613208 8.498583z'
            fill='#f89d35'
          />
          <path
            d='m87.0283032 191.218134 87.0283028 2.124646-9.551886 44.617563-41.391511-10.623229z'
            fill='#d87c30'
          />
          <path
            d='m87.0283032 192.280457 36.0849058 33.994334v33.994334z'
            fill='#ea8d3a'
          />
          <path
            d='m123.113209 227.337114 42.452831 10.623229 13.79717 45.679888-9.551886 5.311615-46.698115-27.620398z'
            fill='#f89d35'
          />
          <path
            d='m123.113209 261.331448-8.490565 65.864024 55.18868-38.243626z'
            fill='#eb8f35'
          />
          <path
            d='m174.056606 193.34278 5.306604 90.297451-15.919812-46.211049z'
            fill='#ea8e3a'
          />
          <path
            d='m74.2924539 262.393771 48.8207551-1.062323-8.490565 65.864024z'
            fill='#d87c30'
          />
          <path
            d='m24.4103777 355.878193 90.2122663-28.682721-40.3301901-64.801701-73.23113313 5.311616z'
            fill='#eb8f35'
          />
          <path
            d='m167.688682 110.481588-45.636793 38.243627-35.0235858 42.492919 87.0283028 3.186969z'
            fill='#e8821e'
          />
          <path
            d='m132.665096 212.464593-11.674528 24.433427 41.39151-10.623229z'
            fill='#393939'
            transform='matrix(-1 0 0 1 283.372646 0)'
          />
          <path
            d='m23.349057 1.06232296 144.339625 109.41926504-24.410378-59.4900858z'
            fill='#e88f35'
          />
          <path
            d='m23.349057 1.06232296-19.10377392 58.42776294 10.61320772 63.7393781-7.42924541 4.249292 10.61320771 9.560906-8.49056617 7.436261 11.67452847 10.623229-7.4292454 6.373938 16.9811323 21.246459 79.5990577-24.433428c38.915096-31.161473 58.018869-47.096318 57.311322-47.804533-.707548-.708215-48.820756-37.1813036-144.339625-109.41926504z'
            fill='#8e5a30'
          />
        </g>
      </g>
    </svg>
  </BaseIcon>
)

export const TrustWalletIcon = (props: any) => (
  <BaseIcon {...props}>
    <svg
      width='32'
      height='32'
      viewBox='0 0 32 32'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M16 32C24.8365 32 32 24.8366 32 16C32 7.16345 24.8365 0 16 0C7.16345 0 0 7.16345 0 16C0 24.8366 7.16345 32 16 32Z'
        fill='#3375BB'
      />
      <path
        d='M16.1132 7C19.2752 9.6408 22.9013 9.47795 23.9373 9.47795C23.7107 24.4968 21.984 21.5186 16.1132 25.73C10.2424 21.5186 8.52645 24.4968 8.2998 9.47795C9.32505 9.47795 12.9511 9.6408 16.1132 7Z'
        stroke='white'
        strokeWidth='2'
        strokeMiterlimit='10'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  </BaseIcon>
)

export const LaunchzoneIcon = (props: any) => (
  <BaseIcon {...props}>
    <svg
      width='32'
      height='32'
      viewBox='0 0 32 32'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M30.7388 9.78811C27.3078 1.64728 17.9274 -2.1713 9.7866 1.25971C1.64578 4.69072 -2.17102 14.0711 1.25999 22.2119C4.69099 30.3527 14.0713 34.1713 22.2122 30.7403H22.214C30.353 27.3111 34.1716 17.9343 30.7424 9.79347C30.7406 9.79168 30.7406 9.7899 30.7388 9.78811ZM15.9646 29.3257C8.61317 29.3257 2.65489 23.3657 2.65489 16.0161C2.65489 8.66647 8.61495 2.70641 15.9646 2.70641C23.3142 2.70641 29.2742 8.66647 29.2742 16.0161C29.2742 23.3657 23.3159 29.3257 15.9646 29.3257Z'
        fill='url(#paint0_linear)'
      />
      <path
        d='M18.9102 26.8056L26.7616 18.9399L18.9048 11.0794L16.0168 13.9693L20.9766 18.9399L16.0132 23.9158L18.9102 26.8056Z'
        fill='url(#paint1_linear)'
      />
      <path
        d='M13.0571 5.23367L5.20386 13.0959L13.0571 20.9563L15.9452 18.0754L10.9817 13.0994L15.9505 8.12351L13.0571 5.23367Z'
        fill='url(#paint2_linear)'
      />
      <defs>
        <linearGradient
          id='paint0_linear'
          x1='5.24223'
          y1='28.2373'
          x2='26.5346'
          y2='4.01669'
          gradientUnits='userSpaceOnUse'
        >
          <stop stopColor='#328B31' />
          <stop offset='1' stopColor='#96CF24' />
        </linearGradient>
        <linearGradient
          id='paint1_linear'
          x1='8.51107'
          y1='31.1065'
          x2='29.7995'
          y2='6.88588'
          gradientUnits='userSpaceOnUse'
        >
          <stop stopColor='#328B31' />
          <stop offset='1' stopColor='#96CF24' />
        </linearGradient>
        <linearGradient
          id='paint2_linear'
          x1='1.97803'
          y1='25.3642'
          x2='23.2704'
          y2='1.14365'
          gradientUnits='userSpaceOnUse'
        >
          <stop stopColor='#328B31' />
          <stop offset='1' stopColor='#96CF24' />
        </linearGradient>
      </defs>
    </svg>
  </BaseIcon>
)

export const EzdefiIcon = (props: any) => (
  <BaseIcon {...props}>
    <svg
      width='26'
      height='36'
      viewBox='0 0 26 36'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M21.9714 1.85928C22.8043 4.07598 20.1793 6.3737 18.9672 5.92323C18.4649 5.73526 17.9626 5.50841 17.5251 5.55054C17.2705 5.59678 17.0245 5.68204 16.7959 5.80332L17.4797 6.71398C17.4797 6.71398 19.0094 7.61816 19.8779 8.15613C19.9867 8.22491 20.1178 8.24927 20.2441 8.22419C22.9372 7.61816 23.7215 3.25282 21.9714 1.85928Z'
        fill='#6772E5'
      />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M25.5232 26.3726C18.1796 24.9466 10.6545 16.9743 15.0976 16.4946C17.8069 16.2095 18.0143 12.9298 21.9032 14.6831C22.0127 14.7323 22.131 14.759 22.251 14.7615C22.371 14.7639 22.4903 14.7421 22.6017 14.6973C22.7131 14.6525 22.8143 14.5856 22.8992 14.5008C22.9841 14.4159 23.051 14.3148 23.0958 14.2034L23.9449 12.2006C24.1394 11.64 24.1037 10.7844 23.6954 10.3728C23.2125 9.88345 22.1139 10.0066 21.6148 9.72465C20.4449 9.02788 17.4536 7.13202 17.2527 7.01211C17.0518 6.8922 16.5916 5.99775 16.3906 5.89404C16.0828 5.72535 15.7566 5.59268 15.4184 5.49867C14.9218 5.39475 14.406 5.43409 13.9309 5.61209C12.1193 6.16303 5.16133 8.16259 8.08452 0.666656C8.08452 0.666656 1.43767 6.50007 7.76044 9.52696C7.81704 9.54997 7.86598 9.58851 7.90162 9.63813C7.93726 9.68775 7.95814 9.74643 7.96187 9.80741C7.9656 9.86839 7.95201 9.92918 7.92268 9.98277C7.89335 10.0364 7.84946 10.0806 7.79609 10.1103C5.79005 11.3386 -1.37533 16.2159 1.37934 26.7679C3.2914 30.3587 8.50906 33.2884 15.5027 35.3333C17.9624 34.3935 24.2593 29.1791 25.5232 26.3726Z'
        fill='#6772E5'
      />
      <path
        opacity='0.2'
        fillRule='evenodd'
        clipRule='evenodd'
        d='M15.0944 16.4947C17.8037 16.2095 18.0111 12.9298 21.9001 14.6831C22.0095 14.7324 22.1278 14.759 22.2479 14.7615C22.3679 14.7639 22.4872 14.7421 22.5985 14.6973C22.7099 14.6525 22.8111 14.5857 22.896 14.5008C22.9809 14.4159 23.0478 14.3148 23.0927 14.2034L23.9418 12.2006C24.1362 11.64 24.1006 10.7844 23.6922 10.3728C23.4297 10.1038 22.9793 10.0196 22.4996 9.9418C24.564 10.739 22.6941 13.5747 22.0783 13.552C21.3491 13.5261 20.0982 11.977 18.588 11.9316C17.0778 11.8863 16.2028 14.5761 14.187 14.7641C11.0953 15.0525 10.8976 10.9626 9.00175 12.7483C7.10589 14.534 1.14285 27.3869 15.4833 35.3171C17.9496 34.3741 24.2334 29.1597 25.5006 26.3564C18.1764 24.9466 10.6513 16.9646 15.0944 16.4947Z'
        fill='#224099'
      />
      <g opacity='0.2'>
        <path
          opacity='0.2'
          fillRule='evenodd'
          clipRule='evenodd'
          d='M25.5199 26.3725C18.6365 25.0308 11.5845 17.9465 14.4008 16.6664C12.8873 17.3145 10.9558 19.8456 10.9558 24.0845C10.9558 28.573 13.8725 33.2689 15.4929 35.3301C17.8392 34.4324 23.6856 29.6328 25.306 26.7614C25.4356 26.5151 25.5069 26.3693 25.5069 26.3693L25.5199 26.3725Z'
          fill='#224099'
        />
      </g>
    </svg>
  </BaseIcon>
)

export const AuthereumIcon = (props: any) => (
  <BaseIcon {...props}>
    <img
      src='https://lh3.googleusercontent.com/fife/AAWUweXnkq4Nhs0LaZRndBTWf3uawkjRJkCygc5KxB4JijnX1hHDhvcYdQ1ismnbiL62H42Ur-_GKmEIm9uLL3ecLRTFGqsYyopr-RQoKbhe9cSYL6wAdxh7ERN_u7GjfGz4rJf6HMzerGiy_Vr3l_qCPxHbv7YTJdkNmnMctBNPwUEvc03mus32nmB3r6x18rRrYKNzxfVKotRAeZIjw-qkFDGv6aLYfuZDuJh4_7JQ6H_oth206k0kaX2bqaPBAbCvI43Z3CrcFcpYysXu9HHxjjyEJDjmyBUTQiKBlzSSFGALr9jiRS-EqYe5kRApWuA-Y1RtoXUdn7Y09ZhTSmA1-ru120_aDSqzRt07VUXc2zhTGmjOui_1uQsj82mn_PtFSPau9AN10NbxFwuuXdJzpbKdTcc8E600f9Tkw7mZENA5MAwzAjC_CDoT-nIhSqF8MlwDQmpBMlgD0vELnvwNDaCas_PAsmNoAyfdVXZRUtQXCKw1_nbALFAdKtX1S6LW1_Yy0dGW3gluEJzMMeMaVNOUQwg-Rvt1qi-idZTAFxrjNzsYAO36jDUkVu7Axy6zUJOuP25CjczhcXRNXg8rF4oiyLyzHhdrmgn3HPFPprd7jyF3mFdctOdo2eBTED87t4y-EiBppTmjF8tMJZt02_9pspe6U7o_1qzdqTsPfIEX-rmouwxwTi-cnYMJjBc-uY_bRGDXH7bjcvxtQ5dmHIDhwLsLEvtWJJ0=w1920-h937-ft'
      alt='authereumLogo'
    />
  </BaseIcon>
)

export const CoinBaseIcon = (props: any) => (
  <BaseIcon {...props}>
    <svg
      width='1024'
      height='1024'
      viewBox='0 0 1024 1024'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <rect width='1024' height='1024' rx='512' fill='#0961FF' />
      <path
        d='M512.147 692C412.697 692 332.146 611.45 332.146 512C332.146 412.55 412.697 332 512.147 332C601.247 332 675.197 396.95 689.447 482H870.797C855.497 297.2 700.846 152 512.147 152C313.396 152 152.146 313.25 152.146 512C152.146 710.75 313.396 872 512.147 872C700.846 872 855.497 726.8 870.797 542H689.297C675.047 627.05 601.247 692 512.147 692Z'
        fill='white'
      />
    </svg>
  </BaseIcon>
)

export const TorusIcon = (props: any) => (
  <BaseIcon {...props}>
    <img
      src='https://lh3.googleusercontent.com/fife/AAWUweUtZPHJm5EshDoI6Sjqh8iMCmRgovIuN_QYuJuj_OXZGgKYjrt0Gf4nEjOzLl7JVwZxsWTLX9LS_MIyB4mrErKsJS4-HnBgE4rusoQgU3FZdhjIqxTBh_WAPNQI_dU7c2Hp2BAE6hGj3bHiXLfIKmBN4NXilLlmfA3zu4eFRX54DBEdkAC18AT78VlgxS55YlfRSU1T7gFjZzyhb_xukic_6rzsrjrEuIbUILldDoLHp3h2ix6mSKp0pePQDUWfWaGtDfOnIEmo3c6zfofZXyl-j17jLWhKG4hnyPSjod9mqNIxawtjcr7WCDS22RSNeACUwV9cChP0P00hETb7SQa-Z62dvwGT9N74IupKxVnCOUmJXvfQ4mIlmUOqC04bS8h0K5kyNZEY8ZA3spkzkHTwr8bTGevphGbBx7iOeWVqinJVRmZUBAhmE8c6v2SQeGsbDHs_mnv2FO5qwOSiony8W0PyHPeamLbzZPplPiuN76zq1BlfxVBvtEA3_YraZRT7xAQjt6XE_kCndWxaRBZYwtn-kkTCk8wMiU6GOowpCCyRtYf5dSAM54Im2T1paoU1D5H90ibGg3aTjgefJIc7m3eT_80P8h0wzINaS1y0Nr-oHAwUdDDgQkZ5BbsMJxM_8yk77gIHsggZOQDZLRJefTE_3F3uFFSJKBA-qyGXZEPpVa4Sb-sbMkJB0xMQKuliNROG_eYoUeMNiypEtqkVDAJJYZ-XCy8=w1920-h591-ft'
      alt='torusLogo'
    />
  </BaseIcon>
)

export const WalletConnectIcon = (props: any) => (
  <BaseIcon {...props}>
    <svg height='512' viewBox='0 0 512 512' width='512'>
      <radialGradient id='a' cx='0%' cy='50%' r='100%'>
        <stop offset='0' stopColor='#5d9df6' />
        <stop offset='1' stopColor='#006fff' />
      </radialGradient>
      <g fill='none' fillRule='evenodd'>
        <path
          d='m256 0c141.384896 0 256 114.615104 256 256s-114.615104 256-256 256-256-114.615104-256-256 114.615104-256 256-256z'
          fill='url(#a)'
        />
        <path
          d='m64.6917558 37.7088298c51.5328072-50.2784397 135.0839942-50.2784397 186.6167992 0l6.202057 6.0510906c2.57664 2.5139218 2.57664 6.5897948 0 9.1037177l-21.215998 20.6995759c-1.288321 1.2569619-3.3771 1.2569619-4.665421 0l-8.534766-8.3270205c-35.950573-35.0754962-94.237969-35.0754962-130.188544 0l-9.1400282 8.9175519c-1.2883217 1.2569609-3.3771016 1.2569609-4.6654208 0l-21.2159973-20.6995759c-2.5766403-2.5139229-2.5766403-6.5897958 0-9.1037177zm230.4934852 42.8089117 18.882279 18.4227262c2.576627 2.5139103 2.576642 6.5897593.000032 9.1036863l-85.141498 83.070358c-2.576623 2.513941-6.754182 2.513969-9.33084.000066-.00001-.00001-.000023-.000023-.000033-.000034l-60.428256-58.957451c-.64416-.628481-1.68855-.628481-2.33271 0-.000004.000004-.000008.000007-.000012.000011l-60.4269683 58.957408c-2.5766141 2.513947-6.7541746 2.51399-9.3308408.000092-.0000151-.000014-.0000309-.000029-.0000467-.000046l-85.14386774-83.071463c-2.57663928-2.513921-2.57663928-6.589795 0-9.1037163l18.88231264-18.4226955c2.5766393-2.5139222 6.7541993-2.5139222 9.3308397 0l60.4291347 58.9582758c.6441608.62848 1.6885495.62848 2.3327103 0 .0000095-.000009.0000182-.000018.0000277-.000025l60.4261065-58.9582508c2.576581-2.51398 6.754142-2.5140743 9.33084-.0002103.000037.0000354.000072.0000709.000107.0001063l60.429056 58.9583548c.644159.628479 1.688549.628479 2.332709 0l60.428079-58.9571925c2.57664-2.5139231 6.754199-2.5139231 9.330839 0z'
          fill='#fff'
          fillRule='nonzero'
          transform='translate(98 160)'
        />
      </g>
    </svg>
  </BaseIcon>
)

export const FortmaticIcon = (props: any) => (
  <BaseIcon {...props}>
    <img
      src='https://lh3.googleusercontent.com/fife/AAWUweVfz4TcAL1ayFAgkWv6xIWjGWXxzDXXYO7gRHDffolmHPdKX_I6BJY-HfdpApzJjpvK6IqfKLFEv8UZ1XvoFjz15ccaQorXFD8O1nQxQxf9nYxdSyiZR8smzPi_ICixNEtawfmZWz3L2CJxKReuhoY3DdIfMwyP3aVJf3ftfBAZtrEd9gKz2YyI8sNXhdatDOOcYRcRN7mtCrrymbyOQr8CBzX3G9o43PEbY2EFly9sr53f-k4CKHce1f4rthTVy99QTpqvA9C9vbq6-i1gHdtpvFlj5ycNI_EBUOCD7Rd0l5A--eGEIGUSAGXmGNY-nWmBppSiIwJnziUxr9jlEtRWHUZ60ZCIx5ODeoBv7j8fDvnPttZhIhoTmZ5hHPILJDUlNRdhTIkMb1w915Lv9CP5SQfoDG86rfrOwe0T90UwEcDdekrgLldfDhu_nE7faZDprTPThKW7gLKb5Hbls6AvLhVcuznfWsW3s6i0Tj5l5R6lE09hVF3s6w15ZR3zGCQrx72QhASOerFnBNpQuxWBdDnRjy9qgy2RnB7QF3hdocqR_-PyEExxAK9mylLUfF6EvN-l1-CG0-BcIB0DLlhbDuIKllI-8GIpf-d9OzXakI4atUDCmTLq2UGNArf442wV8rynwPxg6iCklmXTc7Kau3sDgLEfYsi0CaeExe0YPzkcNyZr1U7Of8S-iGfx7H4lGuD3TiUYGiQqQ0WK2UQinnxkj7rFVsg=w1920-h591-ft'
      alt='FortmaticLogo'
    />
  </BaseIcon>
)

export const MagicIcon = (props: any) => (
  <BaseIcon {...props}>
    <img
      src='https://lh3.googleusercontent.com/_P2GSf_LRMAnVRxoUsAFXeAkx3dfDfF9Ie4OkXJKITzlcjLxst3pFPU0VwFsshiVSOnwADoBZ0XzZalNCcOp=w1920-h937'
      alt='magicLogo'
    />
  </BaseIcon>
)

export const PortisIcon = (props: any) => (
  <BaseIcon {...props}>
    <img
      src='https://www.npmjs.com/npm-avatar/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdmF0YXJVUkwiOiJodHRwczovL3MuZ3JhdmF0YXIuY29tL2F2YXRhci9hYTQ1MTExYmE5MWZiZGU1YjA5MWE2ZjMxNGQ4YWFiYT9zaXplPTQ5NiZkZWZhdWx0PXJldHJvIn0.WWFb_tUmVfV03lL7oveoT8XEVvjeL59doHTbwtgPdwM'
      alt='PortisLogo'
    />
  </BaseIcon>
)

export const LedgerIcon = (props: any) => (
  <BaseIcon {...props}>
    <img
      src='https://www.ledger.com/wp-content/uploads/2020/02/puce_blue.png'
      alt='ledgerLogo'
    />
  </BaseIcon>
)

export const FrameIcon = (props: any) => (
  <BaseIcon {...props}>
    <svg
      id='Layer_2'
      data-name='Layer 2'
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 153.42 152.94'
    >
      <title>FrameLogo4</title>
      <path
        d='M145.15,75.59v-58a9.29,9.29,0,0,0-9.3-9.28H77.65a2.24,2.24,0,0,1-1.56-.64l-7-7A2.24,2.24,0,0,0,67.48,0H9.31A9.29,9.29,0,0,0,0,9.27H0v58a2.16,2.16,0,0,0,.65,1.55l7,7a2.16,2.16,0,0,1,.65,1.55v58a9.29,9.29,0,0,0,9.3,9.28H75.8a2.24,2.24,0,0,1,1.56.64l7,7a2.24,2.24,0,0,0,1.56.64h58.19a9.29,9.29,0,0,0,9.31-9.27h0v-58a2.16,2.16,0,0,0-.65-1.55l-7-7A2.17,2.17,0,0,1,145.15,75.59Zm-32.3,38.55H40.65A1.68,1.68,0,0,1,39,112.47V40.53a1.68,1.68,0,0,1,1.67-1.67h72.18a1.68,1.68,0,0,1,1.67,1.67v71.94a1.68,1.68,0,0,1-1.67,1.67Z'
        transform='translate(0 0)'
      ></path>
    </svg>
  </BaseIcon>
)

export default {
  AuthereumIcon,
  CoinBaseIcon,
  EzdefiIcon,
  LaunchzoneIcon,
  MetamaskIcon,
  TorusIcon,
  TrustWalletIcon,
  WalletConnectIcon,
  FortmaticIcon,
  MagicIcon,
  PortisIcon,
  LedgerIcon,
  FrameIcon
}
