type Props = {
    name: string;
    age: number;
}

export const Header = ({name, age}: Props) => {
      return (
        <header>
            <h1> Olá {name}, tudo bem? Sua idade é {age}?  </h1>
        </header>        
    );
}