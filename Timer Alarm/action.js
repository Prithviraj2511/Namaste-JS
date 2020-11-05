
        let inputForm=document.querySelector('#custom');
        let inputField=inputForm.querySelector('input');
        let displayTimer=document.querySelector('.display__time-left')
        let displayEndTimer=document.querySelector('.display__end-time')
        let inputFieldbyButton=document.querySelectorAll('[data-time]')
        let countDown;
        function timer(seconds) {
            const now= Date.now();
            const then=now+seconds*1000;
            displayTime(seconds);
            displayTimeLeft(then)
            countDown=setInterval(() => {
                const remSeconds=Math.round((then-Date.now())/1000)
                if(remSeconds<0){
                    clearInterval(countDown);
                    return;
                }
                displayTime(remSeconds);
            }, 1000);
        }


        function displayTime(seconds) {
            let min=Math.floor(seconds/60);
            let hrs=Math.floor(min/60);
            seconds=seconds%60;
            min=min%60;
            const disphrs=hrs<10?('0'):('')
            const dispmin=min<10?('0'):('')
            const dispsec=seconds<10?('0'):('')
            const display=`${disphrs+hrs}:${dispmin+min}:${dispsec+seconds}`
            displayTimer.textContent=display
            console.log(hrs,min,seconds);
        }

        function displayTimeLeft(ms) {
            const timestamp=new Date(ms);
            displayEndTimer.textContent=`Be Back At ${timestamp.getHours()}:${timestamp.getMinutes()}`
        }

        inputForm.addEventListener('submit',(e)=>{
            clearInterval(countDown);
            const min=inputField.value;
            timer(min*60);
            inputField.value="";
            e.preventDefault();
        })


        function startTimer() {
            clearInterval(countDown);
            timer(parseInt(this.dataset.time))
        }

        inputFieldbyButton.forEach(button=>button.addEventListener('click',startTimer))