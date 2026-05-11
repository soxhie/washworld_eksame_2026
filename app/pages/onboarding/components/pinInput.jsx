
export default function pinInput (){
    const handleInput = (e) => {
        const input = e.target;
        if (input.value.length > 0) {
          const nextInput = input.nextElementSibling;
            if (nextInput) {
                nextInput.focus();
            }
        } else {
          const prevInput = input.previousElementSibling;
            if (prevInput) {
                prevInput.focus();
            }
        }
    };
    return(
         <div className="pinInputContainer">
          <input type="tel" pattern="[0-9]*" inputmode="numeric" size={1} maxLength={1} onInput={handleInput} />
          <input type="tel" pattern="[0-9]*" inputmode="numeric" size={1} maxLength={1} onInput={handleInput} />
          <input type="tel" pattern="[0-9]*" inputmode="numeric" size={1} maxLength={1} onInput={handleInput} />
          <input type="tel" pattern="[0-9]*" inputmode="numeric" size={1} maxLength={1} onInput={handleInput} />
        </div>
    );
}