export function cowSwapLogo(darkMode: boolean): string {
  const darkModeLogo = `
  <svg fill="none" height="54" viewBox="0 0 169 54" width="169" xmlns="http://www.w3.org/2000/svg">
    <g fill="#cae9ff">
      <path d="m70.6953 11.9145c.648-.5513 1.758-.8273 3.3307-.8273h13.6604c1.5747 0 2.8513-1.27312 2.8513-2.84362 0-1.57051-1.2766-2.84368-2.8513-2.84368h-13.4272c-7.4651.00001-11.1977 3.02465-11.1977 9.0739v.2068c0 2.9645.9112 5.2005 2.7347 6.7084 1.8229 1.5082 4.6438 2.262 8.463 2.262h13.4271c1.5748 0 2.8513-1.2731 2.8513-2.8436s-1.2765-2.8437-2.8513-2.8437h-13.6603c-1.5551 0-2.6613-.2755-3.3179-.8272-.657-.5513-.985-1.3785-.985-2.4817v-.2068c0-1.1376.324-1.9817.9722-2.5335z" />
      <path d="m115.69 5.47715-3.248 5.61045h1.631c1.572 0 2.683.2759 3.331.8272.648.5519.972 1.396.972 2.5335v.2069c0 1.1031-.329 1.9304-.985 2.4816-.657.5517-1.763.8273-3.318.8273h-5.612l-3.292 5.6873h8.671c3.818 0 6.639-.7538 8.463-2.2621 1.823-1.5079 2.735-3.7439 2.735-6.7083v-.2069c0-5.52373-3.123-8.51716-9.348-8.99695z" />
      <path d="m109.885 11.0872 3.293-5.68729h-8.383c-7.4652 0-11.1978 3.02464-11.1978 9.07389v.2068c0 2.9645.9112 5.2005 2.7347 6.7084 1.4641 1.2115 3.5837 1.9275 6.3361 2.1658l3.237-5.5911h-1.343c-1.555 0-2.662-.2755-3.318-.8272-.657-.5513-.985-1.3785-.985-2.4817v-.2068c0-1.1376.324-1.9817.972-2.5335.648-.5513 1.758-.8273 3.331-.8273" />
      <path d="m165.085 5.39991c-1.089 0-2.106.53988-2.714 1.44028l-3.223 4.77391c-1.229 1.8202-3.873 1.9357-5.257.2296l-3.44-4.24178c-1.309-1.6143-3.778-1.6143-5.087 0l-3.44 4.24178c-1.384 1.7061-4.028 1.5906-5.257-.2296l-3.223-4.77391c-.608-.9004-1.625-1.44028-2.714-1.44028-2.631 0-4.185 2.94038-2.699 5.10549l8.05 11.7262c1.24 1.8064 3.877 1.9062 5.251.1988l4.024-5.0019c1.31-1.6275 3.793-1.6275 5.103 0l4.024 5.0019c1.374 1.7074 4.011 1.6076 5.251-.1988l8.05-11.7262c1.486-2.16511-.068-5.10549-2.699-5.10549z" />
      <path d="m69.3984 48.76c3.0885 0 5.9801-1.7473 5.9801-5.0449 0-3.3469-2.5348-4.1836-5.5371-5.3525-2.2394-.8614-3.8391-1.4643-3.8268-3.187.0123-1.6734 1.5135-2.5963 3.1747-2.5963 1.3535 0 2.9285.5784 4.3558 1.7473l1.3166-1.698c-1.698-1.3536-3.6791-2.1041-5.6601-2.0918-3.0639.0123-5.4633 2.0549-5.4633 4.7373 0 3.0884 2.6947 4.2328 5.3402 5.2172 2.3871.8982 4.0113 1.4396 4.0113 3.4576 0 1.7103-1.4765 2.7316-3.6668 2.7316-1.7472 0-3.6667-.7752-4.971-2.3748l-1.3905 1.6858c1.7842 1.9072 4.0975 2.7685 6.3369 2.7685z" />
      <path d="m92.7158 36.3446-3.1254 9.167h-.0492l-2.8301-9.167h-1.7718l-2.7932 9.1547h-.0492l-3.1254-9.1547h-2.0795l4.2574 12.2555h1.8826l2.7686-8.9333h.0492l2.7563 8.9333h1.9318l4.2574-12.2555z" />
      <path d="m106.189 36.3446v1.8088h-.049c-1.021-1.2797-2.535-1.9565-4.208-1.9565-3.4699 0-6.0047 2.7317-6.0047 6.3493 0 3.7652 2.6333 6.2138 6.0167 6.2138 1.809 0 3.31-.7875 4.307-2.1041h.025v1.9442h1.956v-12.2678zm-4.048 10.5451c-2.4976 0-4.1342-1.858-4.1342-4.3313 0-2.7316 1.8211-4.5035 4.1592-4.5035 2.35 0 4.097 1.9811 4.097 4.5035 0 2.5963-1.919 4.3313-4.122 4.3313z" />
      <path d="m118.285 36.1969c-1.661 0-3.15.6768-4.171 1.9565h-.05v-1.8088h-2.042v17.2389h2.03v-6.7922h.049c.985 1.2427 2.437 1.981 4.172 1.981 3.383 0 6.017-2.4609 6.017-6.2139 0-3.6298-2.535-6.3615-6.005-6.3615zm-.209 10.7051c-2.166 0-4.085-1.735-4.085-4.3312 0-2.5225 1.747-4.5036 4.06-4.5036 2.326 0 4.147 1.7719 4.147 4.5036 0 2.4732-1.637 4.3312-4.135 4.3312z" />
      <path d="m57.9096 4.98962c-.5327-3.74572-12.5029-1.54797-15.7031-.96045-.2551.04688-.4543.08344-.5879.10602-.0926.01562-.1792-.06226-.1604-.15283.184-.90619.3169-3.356375-1.4475-3.8868354-1.128-.3394196-1.872.2868004-2.3135.9185754-.1975.28345-.7891 1.50873-1.1567 2.35931-.1981.45935-.6594 1.13055-1.1665 1.11841-2.1263-.65106-4.2623-.97668-6.3982-.97668-2.1357 0-4.272.32562-6.3985.97668-.5068.01215-.9683-.65906-1.1667-1.11841-.3674-.85059-.9587-2.07587-1.1565-2.35931-.4414-.631705-1.185-1.257995-2.3132-.9185754-1.7649.5304604-1.6318 2.9806454-1.4475 3.8868354.0185.09058-.068.1684-.1609.15283-.1331-.02252-.332-.05908-.5865-.10583-3.1984-.58729-15.171318-2.7859-15.7045278.96026-.5459002 3.83607 4.3864678 9.12628 9.5476078 11.50388.27246.1255.51442.2984.75672.4716.2007.1434.4015.2869.6202.4039.8125.4348 1.2969 1.52 1.178 2.4989v13.7058c4.0696-2.8157 10.0517-4.5679 16.8318-4.5679 6.7802 0 12.7622 1.7522 16.832 4.568v-13.7059c-.1192-.9789.365-2.0641 1.1773-2.4989.2193-.1171.4206-.2609.6216-.4046.2419-.1729.4835-.3455.7555-.4709 5.1611-2.3775 10.0941-7.66775 9.5474-11.50388zm-30.591 14.38128c-.2119 1.1196-2.1001 1.8213-3.646 2.2134-1.2339.3052-2.4986.4585-3.7749.4585-.3228 0-.646-.0098-.9697-.0293-.5-.0308-.9292-.1201-1.3121-.2734-.7519-.3003-1.4023-.8233-1.8798-1.5118-.669-.9336-.9273-1.9804-.7393-3.0161.1831-1.0322.7886-1.9267 1.7495-2.5835.6734-.4765 1.4639-.7485 2.2749-.7783.418-.0146.8496.0464 1.3272.1851 1.5405.4477 2.9897 1.1201 4.3066 1.998 1.3237.8926 2.8574 2.1904 2.6665 3.3198zm14.8887.8687c-.4688.6767-1.1192 1.1997-1.8721 1.5009-.3828.1529-.8115.2422-1.3115.273-.3238.0195-.648.0293-.9707.0293-1.2759 0-2.5396-.1533-3.7691-.4575-1.5503-.3926-3.438-1.0948-3.6513-2.2139-.1924-1.1479 1.3403-2.4453 2.6601-3.335 1.3228-.8818 2.772-1.5542 4.3115-2.0009.4756-.1387.9038-.2007 1.3247-.1851.8125.0298 1.6031.3018 2.2886.7871.9497.6485 1.5547 1.5435 1.7378 2.5791.1875 1.0322-.0708 2.0786-.748 3.023z" />
    </g>
      <path d="m23.6526 17.5286c-1.1602-.7734-2.4424-1.3681-3.8072-1.7646-.2666-.0777-.4975-.1157-.7036-.1157-.019 0-.0381.0004-.0566.0009-.4585.0166-.9121.1748-1.3111.4571-.5805.3969-.9052.8598-1.0053 1.4238-.1026.5644.041 1.1064.438 1.6611.2837.4087.6538.708 1.0776.8775.2022.081.4482.1294.7524.1479 1.4229.0874 2.835-.041 4.1983-.3784 1.2373-.3135 1.8672-.6294 2.1621-.8184-.2119-.2758-.6943-.7827-1.7446-1.4912z" fill="#ffcf56" />
      <path d="m40.1897 16.115c-.4112-.291-.8648-.4492-1.3247-.4658-.2188-.0039-.4673.0298-.7578.1143-1.3643.396-2.6465.9907-3.8125 1.7681-1.0469.706-1.5284 1.2119-1.7403 1.4882.2954.189.9263.5049 2.167.8194 1.3579.3364 2.77.4638 4.1929.3774.3047-.0185.5508-.0669.7524-.1474.4239-.1695.794-.4693 1.0694-.8667.4057-.566.5493-1.1075.4472-1.6685-.1001-.5679-.4248-1.0308-.9936-1.419z" fill="#ffcf56" />
      <path d="m28.9758 31.286c-11.0748 0-20.05225 5.0846-20.05225 11.3571 0 6.2724 8.97745 11.3569 20.05225 11.3569s20.0525-5.0846 20.0525-11.3569c0-6.2724-8.9779-11.3571-20.0525-11.3571zm-9.491 12.5177c-1.7159.8235-3.3137 0-3.6201-1.8675-.3359-2.0008 2.4055-6.7561 3.0361-3.1603.3609 2.0571 1.4339 1.2915 2.2896.6811.6398-.4565 1.158-.8261 1.1653.1367-.094 1.8167-1.1972 3.4351-2.8709 4.21zm22.6018-1.8675c-.3068 1.8675-1.9046 2.691-3.6203 1.8675-1.6737-.7749-2.7771-2.3933-2.8704-4.21.0071-.9628.525-.5932 1.1647-.1368.8555.6104 1.9286 1.3762 2.2898-.681.6305-3.5958 3.3716 1.1595 3.0362 3.1603z" fill="#cae9ff" />
   </svg>`

  // Please note, this Light Mode logo is using a different blue from the branding kit.
  // Instead it uses #152943 to adapt to the existing CoW Swap theme colors.
  const lightModeLogo = `
  <svg fill="none" height="54" width="169" xmlns="http://www.w3.org/2000/svg">
  <g fill="#152943">
    <path clip-rule="evenodd" d="m42.206 4.03c3.2-.588 15.17-2.786 15.704.96.546 3.836-4.387 9.126-9.548 11.504-.272.125-.513.297-.755.47-.201.144-.402.288-.622.405-.812.435-1.296 1.52-1.177 2.499v13.706c-4.07-2.816-10.052-4.568-16.832-4.568s-12.762 1.752-16.832 4.568v-13.706c.119-.979-.366-2.064-1.178-2.499a5.723 5.723 0 0 1 -.62-.404c-.242-.173-.484-.346-.757-.471-5.161-2.378-10.093-7.668-9.548-11.504.534-3.746 12.507-1.548 15.705-.96.254.046.453.083.587.105.092.016.179-.062.16-.153-.184-.906-.317-3.356 1.448-3.886 1.128-.34 1.872.286 2.313.918.198.284.79 1.509 1.157 2.36.198.459.66 1.13 1.166 1.118a21.77 21.77 0 0 1 6.399-.977c2.136 0 4.272.326 6.398.977.507.012.968-.66 1.167-1.119.367-.85.959-2.075 1.156-2.359.442-.632 1.186-1.258 2.314-.918 1.764.53 1.631 2.98 1.447 3.886-.018.09.068.169.16.153.134-.022.334-.059.588-.106zm-15.772 15.172c.06-.347-.508-1.226-2.278-2.42a14.76 14.76 0 0 0 -4.06-1.883 3.329 3.329 0 0 0 -1.042-.15c-.643.024-1.26.24-1.8.622-.721.492-1.22 1.15-1.371 2-.155.85.086 1.637.593 2.343.374.54.878.951 1.474 1.19.327.13.68.188 1.032.21 1.499.091 3.013-.043 4.47-.403 2.078-.527 2.917-1.163 2.982-1.509zm13.567 1.702a3.267 3.267 0 0 0 1.475-1.19c.506-.706.747-1.492.593-2.342-.15-.85-.65-1.509-1.372-2.001a3.312 3.312 0 0 0 -1.8-.622 3.329 3.329 0 0 0 -1.042.15 14.755 14.755 0 0 0 -4.06 1.882c-1.77 1.195-2.336 2.074-2.278 2.421.066.346.904.982 2.983 1.509 1.456.36 2.97.494 4.47.403.351-.022.705-.08 1.031-.21z" fill-rule="evenodd" />
    <path clip-rule="evenodd" d="m8.924 42.643c0-6.272 8.977-11.357 20.052-11.357 11.074 0 20.052 5.085 20.052 11.357s-8.977 11.357-20.052 11.357-20.052-5.084-20.052-11.357zm6.94-.707c.307 1.868 1.905 2.691 3.62 1.868a4.93 4.93 0 0 0 2.872-4.21c-.008-.963-.526-.593-1.166-.137-.855.61-1.928 1.376-2.29-.681-.63-3.596-3.371 1.16-3.035 3.16zm22.602 1.868c1.716.823 3.314 0 3.62-1.868.336-2-2.405-6.756-3.036-3.16-.36 2.057-1.434 1.291-2.29.68-.639-.456-1.157-.825-1.164.138a4.927 4.927 0 0 0 2.87 4.21z" fill-rule="evenodd" />
    <path d="m70.695 11.915c.648-.552 1.758-.828 3.331-.828h13.66a2.847 2.847 0 0 0 2.852-2.843 2.848 2.848 0 0 0 -2.852-2.844h-13.426c-7.465 0-11.197 3.025-11.197 9.074v.207c0 2.964.91 5.2 2.734 6.708 1.823 1.508 4.644 2.262 8.463 2.262h13.427a2.847 2.847 0 0 0 2.852-2.843 2.848 2.848 0 0 0 -2.852-2.844h-13.66c-1.555 0-2.661-.276-3.318-.827-.657-.552-.985-1.379-.985-2.482v-.207c0-1.138.324-1.982.972-2.533zm44.995-6.438-3.248 5.61h1.631c1.572 0 2.683.277 3.331.828.648.552.972 1.396.972 2.533v.207c0 1.103-.329 1.93-.985 2.482-.657.552-1.763.827-3.318.827h-5.612l-3.292 5.688h8.671c3.818 0 6.639-.754 8.463-2.263 1.823-1.508 2.735-3.744 2.735-6.708v-.207c0-5.524-3.123-8.517-9.348-8.997zm-5.805 5.61 3.293-5.687h-8.383c-7.465 0-11.198 3.025-11.198 9.074v.207c0 2.964.911 5.2 2.735 6.708 1.464 1.212 3.584 1.928 6.336 2.166l3.237-5.591h-1.343c-1.555 0-2.662-.276-3.318-.827-.657-.552-.985-1.379-.985-2.482v-.207c0-1.138.324-1.982.972-2.533.648-.552 1.758-.828 3.331-.828m60.523-5.687c-1.089 0-2.106.54-2.714 1.44l-3.223 4.774c-1.229 1.82-3.873 1.936-5.257.23l-3.44-4.242a3.277 3.277 0 0 0 -5.087 0l-3.44 4.242c-1.384 1.706-4.028 1.59-5.257-.23l-3.223-4.774a3.274 3.274 0 0 0 -2.714-1.44c-2.631 0-4.185 2.94-2.699 5.105l8.05 11.727c1.24 1.806 3.877 1.906 5.251.198l4.024-5.001a3.277 3.277 0 0 1 5.103 0l4.024 5.002c1.374 1.707 4.011 1.607 5.251-.2l8.05-11.726c1.486-2.165-.068-5.105-2.699-5.105zm-95.687 43.36c3.089 0 5.98-1.747 5.98-5.045 0-3.347-2.534-4.183-5.537-5.352-2.239-.862-3.839-1.465-3.826-3.187.012-1.674 1.513-2.597 3.174-2.597 1.354 0 2.929.579 4.356 1.748l1.317-1.698c-1.698-1.354-3.68-2.104-5.66-2.092-3.064.012-5.464 2.055-5.464 4.737 0 3.089 2.695 4.233 5.34 5.217 2.388.899 4.012 1.44 4.012 3.458 0 1.71-1.477 2.732-3.667 2.732a6.488 6.488 0 0 1 -4.971-2.375l-1.39 1.686a8.61 8.61 0 0 0 6.336 2.768zm23.318-12.415-3.126 9.167h-.049l-2.83-9.167h-1.771l-2.793 9.154h-.05l-3.124-9.154h-2.08l4.256 12.255h1.883l2.769-8.933h.049l2.756 8.933h1.932l4.257-12.255h-2.08zm13.473 0v1.809h-.049c-1.021-1.28-2.535-1.957-4.208-1.957-3.47 0-6.005 2.732-6.005 6.35 0 3.765 2.634 6.213 6.017 6.213 1.809 0 3.31-.787 4.307-2.104h.025v1.944h1.956v-12.268zm-4.048 10.545c-2.498 0-4.134-1.858-4.134-4.331 0-2.732 1.82-4.504 4.159-4.504 2.35 0 4.097 1.981 4.097 4.504 0 2.596-1.919 4.33-4.122 4.33zm16.144-10.693c-1.661 0-3.15.677-4.171 1.956h-.05v-1.808h-2.042v17.239h2.03v-6.794h.049c.985 1.243 2.437 1.981 4.172 1.981 3.383 0 6.017-2.46 6.017-6.213 0-3.63-2.535-6.362-6.005-6.362zm-.209 10.705c-2.166 0-4.085-1.735-4.085-4.331 0-2.523 1.747-4.504 4.06-4.504 2.326 0 4.147 1.772 4.147 4.504 0 2.473-1.637 4.331-4.135 4.331z" />
  </g>
</svg>
  `

  return btoa(unescape(encodeURIComponent(darkMode ? darkModeLogo : lightModeLogo)))
}
