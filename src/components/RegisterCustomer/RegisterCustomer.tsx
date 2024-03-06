import React from "react";
import { ButtonCancel, ButtonRegister, ContainerAllInputs, ContainerButtons, ContainerModal } from "./style";

const RegisterCustomer: React.FC = () => {
  return (
    <ContainerModal>
      <h2>Cadastro de Cliente</h2>
      <ContainerAllInputs>
        <div className="lineInput">
          <label>Código do Cliente</label>
          <input type="text" />
        </div>

        <div className="lineInput">
          <label>Nome do Cliente</label>
          <input type="text" />
        </div>

        <div className="lineInput">
          <label>Rede</label>
          <input type="text" />
        </div>
      </ContainerAllInputs>

      <ContainerButtons>
          <ButtonCancel>Cancelar</ButtonCancel>
          <ButtonRegister>Salvar</ButtonRegister>
      </ContainerButtons>
    </ContainerModal>
  );
};

export default RegisterCustomer;
