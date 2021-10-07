/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Container, Box } from "theme-ui";
import SectionHeader from "Components/section-heading";
import Accordion from "Components/accordion/accordion";
const faqs = [
  {
    title:
      "In this Covid -19 situation, how do you ensure that you will send a healthy person to our place?",
    contents: (
      <div>
        We do medical examination of the person before sending them by checking
        for temperature & symptoms of Covid-19 and only then send them.They will
        also wear a mask and use santizer before entring your home. All our
        staff is fully vaccinated.
      </div>
    ),
  },
  {
    title: "Our area comes under red zone, so how does it work?",
    contents: (
      <div>
        We can't send our staff to red zone area as per Government rules.
      </div>
    ),
  },
  {
    title: `Why aren't patients allowed to visit the centre for injections and medicines?`,
    contents: (
      <div>
        Patient safety is important and it is advisable to limit travel. Hence
        we want to minimize visits.
      </div>
    ),
  },
  {
    title: `What are the charges for the procedure?`,
    contents: (
      <div>
        Since the procedure is the same and doesn't change, the charges remain
        what we charge at the hospital. Infact, it costs us more to provide
        these services at home but we don't burden you!
      </div>
    ),
  },
  {
    title: `How is the procedure done with this "IPL at home"?`,
    contents: (
      <div>
        We collect blood samples, deliver medicines and give injections at your
        home to minimize travel for you.
      </div>
    ),
  },
  {
    title: `Is Semen analysis also done?`,
    contents: (
      <div>
        We don't do Semen analysis because the results can be inconsistent.
        Tests have to be carried out within 30 minutes.
      </div>
    ),
  },
  {
    title: `What are the timings for this facility ? Is it available 24/7 ?`,
    contents: (
      <div>
        This is not a 24/7 facility, but if the Doctor suggests that you need to
        take certain injections, medication or scans at certain times, we will
        do the needful no matter what time it is.
      </div>
    ),
  },
  {
    title: `How many members will visit my place?`,
    contents: (
      <div>
        Only 2 members will visit you, 1 driver and 1 Staff nurse or lab
        assistant. The driver stays outside!
      </div>
    ),
  },
  {
    title: `Is the IPL service only for IVF treatment or available for IUI and others too?`,
    contents: (
      <div>This service is for IVF, IUI and and PCOD related issues.</div>
    ),
  },
];
export default function Faq() {
  return (
    <Box
      as="section"
      variant="section.faq"
      sx={{ pt: "48px", mb: "12px" }}
      id="faq"
    >
      <Container>
        <SectionHeader
          title="Do you have any quesiton"
          description="Our support team ready to help you, please contact with them"
        />
        <Box
          sx={{
            display: "flex",
            width: ["100%", null, null, "650px", "745px"],
            flexDirection: "column",
            mx: "auto",
            my: -4,
          }}
        >
          <Accordion items={faqs} />
        </Box>
      </Container>
    </Box>
  );
}
