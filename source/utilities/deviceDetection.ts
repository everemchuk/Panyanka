function isDevice(): string {
  const regex: RegExp = /Mobi|Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i
  const isMobile: boolean = regex.test(navigator.userAgent)

	let device: string = ''
	const body = <HTMLElement>document.getElementById('body')

	if (isMobile) {
		device = 'mobile'
		body.dataset.device = '_mobile'
	} else {
		device = 'desktop'
		body.dataset.device = '_desktop'
	}

	return device
}

export default isDevice;