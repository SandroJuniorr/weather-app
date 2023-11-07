import { IconSearch, SearchContainer, SearchInput } from "./styles";
import { BiSearchAlt2 } from 'react-icons/bi'

export function Search() {
    return (
        <SearchContainer>
            <SearchInput placeholder="Procurar..." />
            <IconSearch>
                <BiSearchAlt2 />
            </IconSearch>
        </SearchContainer>
    )
}