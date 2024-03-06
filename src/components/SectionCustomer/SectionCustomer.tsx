import React from "react";
import { ContainerButtons, ContainerLegend, ContainerSearch, ContainerSectionCustomer } from "./style";
import customerMock from "../../mock/customerMock";
import CardCustomer from "../CardCustomer/CardCustomer";
import { CiSearch } from "react-icons/ci";

const SectionCustomer: React.FC = () => {
  return (
    <ContainerSectionCustomer>
      <ContainerButtons>
        <span>Clientes (Não vinculado)</span>

        <div className="buttons">
          <button>Adicionar Cliente</button>
          <button>Vincular</button>
        </div>
      </ContainerButtons>

      <ContainerSearch>
        <CiSearch className="icon"/>
        <input type="text" placeholder="Buscar"/>
      </ContainerSearch>

      <ContainerLegend>
        <div className="labelData">
          <input type="checkbox" />
          <span>Código</span>
          <span>Parceiro</span>
        </div>

        <span>Rede</span>
      </ContainerLegend>

      {customerMock.map((customer) => (
        <CardCustomer key={customer.id} customer={customer} />
      ))}
    </ContainerSectionCustomer>
  );
};

export default SectionCustomer;
