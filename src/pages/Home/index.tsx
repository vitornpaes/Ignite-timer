import { Play } from "phosphor-react";
import {
  CountdownStyled,
  FormStyled,
  HomeStyled,
  Separator,
  MinutesAmountInput,
  StartCountdownButton,
  TaskInput,
} from "./styles";
import { useState } from "react";

export function Home() {
  const [task, setTask] = useState("");

  function handleTaskChange(event){
    setTask(event.target.value);
  }

  return (
    <HomeStyled>
      <form action="">
        <FormStyled>
          <label htmlFor="task">Vou trabalhar em</label>
          <TaskInput
            id="task"
            list="task-suggestions"
            placeholder="Dê um nome para o seu projeto"
            value={task}
            onChange={handleTaskChange}
          />

          <datalist id="task-suggestions">
            <option value="Projeto 1" />
            <option value="Projeto 2" />
            <option value="Projeto 3" />
          </datalist>

          <label htmlFor="">durante</label>
          <MinutesAmountInput
            type="number"
            id="minutesAmount"
            placeholder="00"
            step={5}
            min={5}
            max={60}
          />
          <span>minutos.</span>
        </FormStyled>
        <CountdownStyled>
          <span>0</span>
          <span>0</span>
          <Separator>:</Separator>
          <span>0</span>
          <span>0</span>
        </CountdownStyled>
        <StartCountdownButton disabled={!task.trim()} type="submit">
          <Play size={24} />
          Começar
        </StartCountdownButton>
      </form>
    </HomeStyled>
  );
}
