const useState = (defaultValue) => {
    let value = defaultValue;
    const getValue = () => value
    const setValue = newValue => value = newValue
    return [getValue, setValue];
}

const [count, setCount] = useState(0);

const counter = () => {
    setCount(count() + 1)
    console.log(count())
}