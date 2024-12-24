const body = <HTMLElement>document.getElementById('body');

function lock(): void {
	body.dataset.scroll = 'locked'
}

function loaded(): void {
	body.dataset.loaded = 'true'
}

export { lock, loaded };