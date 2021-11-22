/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Container, Box } from "theme-ui";
import loadable from "@loadable/component";
const SectionHeading = loadable(() => import("Components/section-heading"));
const Accordion = loadable(() => import("Components/accordion/accordion"));
const faqs = [
  {
    title: "How to register for PARIPOORNA offer?",
    contents: (
      <div>
        Visit any of our canter’s during PARIPOORNA benefit plan registration,
        duly fill your form and submit to concerned person.
      </div>
    ),
  },
  {
    title: "Who will be eligible for the PARIPOORNA offer?",
    contents: (
      <div>
        This plan is specially designed for the couple need financial support
        for their infertility treatment. However, a couple will be eligible if
        the GarbhaGnan foundation committee approved your application.
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
        <SectionHeading
          title="Do you have any quesiton"
          description="GG Care is here to help. Please contact us on +91 8880000909 and one of our associates will get in touch with you."
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
