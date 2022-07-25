import { Container } from "../util/container"
import { Section } from "../util/section"


export const PlanComparisonTable = () =>{
    return(
        <Section>
            <Container>
                <h3 className="lg:text-4xl text-2xl font-bold">Plan comparison</h3>
                <table className="w-[100%] h-[60vh]">
                    <PlanComparisonTableHeader />
                    <PlanComparisonTableElement />
                    <PlanComparisonTableElement />
                    <PlanComparisonTableElement />
                    <PlanComparisonTableElement />
                    <PlanComparisonTableElement />
                    <PlanComparisonTableElement />
                    <PlanComparisonTableLastElement />
                </table>
            </Container>
        </Section>
    )
};

const PlanComparisonTableHeader = () =>(
    <tr>
        <th className="border-parlourDark border-b-2 border-r-2 text-left lg:text-base pr-2">Name</th><th className="border-parlourDark border-b-2 border-r-2 text-transparent bg-clip-text break-words bg-gradient-to-r bg-radial-at-tl from-[#FF630B] to-[#FBC918] lg:text-base p-0">Analytic reports</th><th className="border-parlourDark border-b-2 border-r-2 text-transparent bg-clip-text break-words bg-gradient-to-r bg-radial-at-tl from-parlourGreen to-parlourBlue lg:text-base p-0">Parlour CARE+</th><th className="border-parlourDark border-b-2 text-transparent bg-clip-text break-words bg-gradient-to-r bg-radial-at-tl from-blue-600 to-parlourBlue lg:text-base p-0">Performance reports</th>
    </tr>
);

const PlanComparisonTableElement = () =>(
    <tr>
        <td className="border-parlourDark border-b-2 border-r-2">Name</td><td className="border-parlourDark border-b-2 border-r-2"></td><td className="border-parlourDark border-b-2 border-r-2"></td><td className="border-parlourDark border-b-2"></td>
    </tr>
);

const PlanComparisonTableLastElement = () =>(
    <tr>
        <td className="border-parlourDark border-r-2">Name</td><td className="border-parlourDark border-r-2"></td><td className="border-parlourDark border-r-2"></td><td></td>
    </tr>
)