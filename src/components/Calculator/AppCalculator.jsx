import { useEffect, useState } from 'react';
import {
  Wrapper,
  Container,
  Input,
  Button1,
  Button2,
  Button3,
  Div1,
  Div2,
  Div3,
  ContainerButton,
} from './AppCalculator.styled';

const buttomNumber = [
  { number: 1, id: 'number-1' },
  { number: 2, id: 'number-2' },
  { number: 3, id: 'number-3' },
  { number: 4, id: 'number-4' },
  { number: 5, id: 'number-5' },
  { number: 6, id: 'number-6' },
  { number: 7, id: 'number-7' },
  { number: 8, id: 'number-8' },
  { number: 9, id: 'number-9' },
];
const zero = { number: 0, id: 'number-0' };

const operations = [
  { item: 'AC', id: 'item-AC' },
  { item: '%', id: 'item-%' },
  { item: '*', id: 'item-*' },
  { item: '/', id: 'item-/' },
  { item: '+', id: 'item-+' },
  { item: '-', id: 'item--' },
];
const comma = { item: ',', id: 'item-,' };
const equals = { item: '=', id: 'item-=' };

export const AppCalculator = () => {
  const input = document.getElementsByName('number');
  const [value, setValue] = useState('0');
  // const [mas, setMas] = useState([]);

  useEffect(() => {
    input[0].value = value;
  }, [input, value]);

  // const onSum = item => {
  //   if (value === '0') {
  //     return;
  //   }
  //   if (mas.length > 3) {
  //     if (item === '*') {
  //       cons
  //      const rezul = [Number(mas[0]) * Number(mas[2])];
  //       setMas(rezul);
  //       setValue('0');
  //       return;
  //     }
  // const rezul = mas.map(item => ('/' === item ?  : 'not'));
  // Number.isNaN(Number(item)) ? item : Number(item)

  //     // console.log(rezul);
  //   }

  //   setMas([...mas, value, item]);
  //   setValue('0');
  // };
  const onSum = item => {};

  const onClearInput = () => {
    setValue('0');
    // setMas([]);
  };

  const clickNumber = e => {
    if (value.length > 15) {
      return;
    }

    if (value.includes(',') && e === ',') {
      return;
    }

    if (e === ',') {
      setValue(value + e);
    } else if (value === '0') {
      setValue('' + e);
    } else if (e === ',') {
      setValue(value + e);
    } else if (e === '0') {
      setValue(value + e);
    } else {
      setValue(value + e);
    }
  };

  return (
    <Wrapper>
      <Container>
        <Input
          type="text"
          name="number"
          maxLength="15"
          defaultValue={value}
          disabled
        />
        <ContainerButton>
          <Div1>
            {buttomNumber.map(({ number, id }) => (
              <Button1
                type="button"
                key={id}
                id={id}
                onClick={() => clickNumber(number)}
              >
                {number}
              </Button1>
            ))}
          </Div1>
          <Div2>
            {operations.map(({ item, id }) => (
              <Button2
                type="button"
                key={id}
                id={id}
                onClick={item === 'AC' ? onClearInput : () => onSum(item)}
              >
                {item}
              </Button2>
            ))}
          </Div2>
        </ContainerButton>
        <Div3>
          <Button3
            type="button"
            key={zero.id}
            id={zero.id}
            onClick={() => clickNumber(zero.number)}
          >
            {zero.number}
          </Button3>
          <Button3
            type="button"
            key={comma.id}
            id={comma.id}
            onClick={() => clickNumber(comma.item)}
          >
            {comma.item}
          </Button3>

          <Button3 type="button" key={equals.id} id={equals.id} onClick={onSum}>
            {equals.item}
          </Button3>
        </Div3>
      </Container>
    </Wrapper>
  );
};
