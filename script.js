initBattery()

function initBattery() {
    const liquidBattery = document.querySelector('.battery-liquid');
    const batteryStatus = document.querySelector('.battery-status');
    const batteryPercentage = document.querySelector('.battery-percentage');

    navigator.getBattery().then((batt)=> {
        upadateBattery = () => {
            let level = Math.floor(batt.level * 100)
            batteryPercentage.innerHTML = level+ "%";

            liquidBattery.style.height = `${parseInt(batt.level * 100)} %`


            
            if(level == 100){ 
                batteryStatus.innerHTML = `Full battery <i class="ri-battery-2-fill green-color"></i>`
                liquidBattery.style.height = '100%'
            }
            else if(level <= 25 &! batt.charging){ 
                batteryStatus.innerHTML = `Low battery <i class="ri-plug-line animated-red"></i>`
            }
            else if(batt.charging){ 
                batteryStatus.innerHTML = `Charging... <i class="ri-flashlight-line animated-green"></i>`
            } 

            else {
                batteryStatus.innerHTML = ``
            }

             
             if(level <= 25){
                liquidBattery.classList.add('gradient-color-red')
                liquidBattery.classList.remove('gradient-color-orange','gradient-color-yellow','gradient-color-green')
                liquidBattery.style.height = '20%'
            }
            else if(level <= 40 ){
                liquidBattery.classList.add('gradient-color-orange')
                liquidBattery.classList.remove('gradient-color-red','gradient-color-yellow','gradient-color-green')
                liquidBattery.style.height = '40%'
            }
            else if(level <= 55 ){
                liquidBattery.classList.add('gradient-color-orange')
                liquidBattery.classList.remove('gradient-color-red','gradient-color-yellow','gradient-color-green')
                liquidBattery.style.height = '50%'
            }
            else if(level <= 80){
                liquidBattery.classList.add('gradient-color-yellow')
                liquidBattery.classList.remove('gradient-color-red','gradient-color-orange','gradient-color-green')
                liquidBattery.style.height = '70%'
            }
            else if(level <= 95){
                liquidBattery.classList.add('gradient-color-yellow')
                liquidBattery.classList.remove('gradient-color-red','gradient-color-orange','gradient-color-green')
                liquidBattery.style.height = '95%'
            }
            else{
                liquidBattery.classList.add('gradient-color-green')
                liquidBattery.classList.remove('gradient-color-red','gradient-color-orange','gradient-color-yellow')
                liquidBattery.style.height = '100%'
                liquidBattery.style.borderRadius = `18px` 
            }
            



        }

        upadateBattery()

        
        
        batt.addEventListener('chargingchange', () => {updateBattery()})
        batt.addEventListener('levelchange', () => {updateBattery()})
    })
}

