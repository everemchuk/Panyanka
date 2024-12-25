function isDevice(): string {
  const regex: RegExp = /Mobi|Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i
  const isMobile: boolean = regex.test(navigator.userAgent)

	isMobile ? document.body.dataset.device = '_mobile' : document.body.dataset.device = '_desktop'

	let device: string = ''

	addEventListener("resize", (event) => {
		if (window.innerWidth <= 1025) {
			device = 'mobile'
			document.body.dataset.device = '_mobile'
		} else {
			device = 'desktop'
			document.body.dataset.device = '_desktop'
		}
	})

	return device
}

export default isDevice;