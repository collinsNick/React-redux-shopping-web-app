export default function (identifier, value) {

    let isValid = true;
    let errMsg = '';

    switch (identifier) {

        case('firstName'):
        case('secondName'):
            if (value.trim() === '' && isValid) {
                isValid = false;
                errMsg = 'Name must have a value';
            } else if (!value.match(/^[a-zA-Z]*$/) && isValid) {
                isValid = false;
                errMsg = 'Name must be letters only';
            } else if (value.length < 2 && isValid) {
                isValid = false;
                errMsg = 'Name must be more than one characters long';
            }
            break;

        case('email') :
            if (value.trim() === '' && isValid) {
                isValid = false;
                errMsg = 'Email Address Must have a value';
            } else {
                const pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
                if (!pattern.test(value)) {
                    isValid = false;
                    errMsg = "Please enter a valid email address"
                }
            }
            break;

        default:

    }

    return {isValid: isValid, errorsMsg: errMsg};
}