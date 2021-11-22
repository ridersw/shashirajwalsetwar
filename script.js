console.log("working fine")

let themeDots = document.getElementsByClassName('theme-dot')


for (let swi =0; themeDots.length > swi; swi ++){
	themeDots[swi].addEventListener('click', function(){
		let mode = this.dataset.mode
		console.log('Option clicked: ' + mode)
		setTheme(mode)
	})
}

function setTheme(mode){
	if (mode == 'light'){
		document.getElementById('theme-style').href= 'default.css'
	}
	else if (mode == 'blue'){
		document.getElementById('theme-style').href= 'blue.css'
	}
	else if (mode == 'green'){
		document.getElementById('theme-style').href= 'green.css'
	}

	else if (mode == 'purple'){
		document.getElementById('theme-style').href= 'purple.css'
	}
}