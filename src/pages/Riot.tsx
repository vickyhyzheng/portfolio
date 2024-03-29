import { ArticlePage } from "../components/Article/ArticlePage"
import TibbersBanner from "../assets/images/tibbers.png"
import { ArticleSection } from "../components/Article/ArticleSection"
import { ArticleHeader } from "../components/Article/ArticleHeader"
import { Card } from "../components/Card"
import CalendarSmall from "../assets/icons/calendar-small.svg"
import EyeSmall from "../assets/icons/eye-small.svg"
import MainMedium from "../assets/icons/main-medium.svg"
import FoldersMedium from "../assets/icons/folders-medium.svg"
import ShuffleMedium from "../assets/icons/shuffle-medium.svg"
import UserVoiceMedium from "../assets/icons/user-voice-medium.svg"
import FileMedium from "../assets/icons/file-medium.svg"
import PaperPlaneMedium from "../assets/icons/paper-plane-medium.svg"
import ArrowDown from "../assets/icons/arrow-down-small.svg"
import GroupLarge from "../assets/icons/group-large.svg"

import { Box, Typography } from "@mui/material"
import { ThreeColumnTable } from "../components/Article/Tables/ThreeColumnTable"
import { TextTable } from "../components/Article/Tables/TextTable"
import { RoundButton } from "../components/Button/RoundButton"
import { ArticleSubsection } from "../components/ArticleSubsection"
import { TwoColumnTable } from "../components/Article/Tables/TwoColumnTable"
import { Highlight } from "../components/Article/Highlight"
import { ArticleEnd } from "../components/Article/ArticleEnd"
import { HomeButton } from "../components/HomeButton"
import ScrollToTopOnMount from "../components/ScrollToTopOnMount"
import ImageCarousel from "../components/ImageCarousel"
import Image1 from "../assets/images/carousel/2023-LAX-Intern-Week-4 1.png"
import Image2 from "../assets/images/carousel/2023-LAX-Intern-Week-4 2.png"
import Image3 from "../assets/images/carousel/2023-LAX-Intern-Week-4 3.png"
import Image4 from "../assets/images/carousel/2023-LAX-Intern-Week-4 4.png"
import Image5 from "../assets/images/carousel/2023-LAX-Intern-Week-4 5.png"
import Image6 from "../assets/images/carousel/2023-LAX-Intern-Week-4 6.png"
import Image7 from "../assets/images/carousel/2023-LAX-Intern-Week-4 7.png"
import Image8 from "../assets/images/carousel/2023-LAX-Intern-Week-4 8.png"
import { useRef } from "react"
import { skipToSection } from "../utils/skipToSection"
import { usePageTitle } from "../utils/usePageTitle"

export const Riot = () => {
  usePageTitle("Vicky Zheng | Riot")
  const takeawaysSection = useRef<HTMLElement | null>(null)

  const carouselImages = [
    Image1,
    Image2,
    Image3,
    Image4,
    Image5,
    Image6,
    Image7,
    Image8,
  ]
  const mediumLink =
    "https://medium.com/riot-games-ux-design/my-ux-design-internship-with-riot-games-d5efca21314c"
  const headerBody = (
    <>
      <Typography variant="body2">
        In the summer of 2023 I was able to have a once in a lifetime experience
        of being a UX Design Intern at Riot Games, one of the giants in the
        gaming industry. I worked on Player Platforms department on the Commerce
        Initiative across 2 teams and got to get my hands dirty on designing
        both an{" "}
        <strong>
          internal tools application for adjusting game-store content and a
          player-facing web feature.
        </strong>
      </Typography>
      <Typography variant="body2">
        <br />
        Through my projects, I learned a lot about working with and building
        products for niche, specialist users, as well as designing products with
        global legal requirements in mind. In the 3 months that I had on these
        incredible projects, I am proud of how much I was able to accomplish and
        how I have grown as a designer during my time with Riot.
      </Typography>
    </>
  )
  const teamTableContents = [
    {
      title: "My Role",
      description: "UX/UI Design Intern",
    },
    {
      title: "My Team",
      description: (
        <>
          <Typography variant="body1">1 manager</Typography>
          <Typography variant="body1">2 design mentors</Typography>
          <Typography variant="body1">1 project manager</Typography>
          <Typography variant="body1">6 developers</Typography>
        </>
      ),
    },
    {
      title: "Skills & Tools",
      description: (
        <>
          <Typography variant="body1" sx={{ display: "list-item" }}>
            Facilitating stakeholder feedback
          </Typography>
          <Typography variant="body1" sx={{ display: "list-item" }}>
            Prototyping & interaction design
          </Typography>
          <Typography variant="body1" sx={{ display: "list-item" }}>
            Document handoff (developers and visual designers)
          </Typography>
          <Typography variant="body1" sx={{ display: "list-item" }}>
            A/B Testing and usability testing
          </Typography>
        </>
      ),
    },
  ]
  const summerStatsContents1 = [
    { icon: MainMedium, title: "4+ Features Designed" },
    { icon: FoldersMedium, title: "2 Project Files Handed Off" },
    { icon: ShuffleMedium, title: "3+ User Flows Designed" },
  ]
  const summerStatsContents2 = [
    { icon: UserVoiceMedium, title: "16+ Feedback Sessions" },
    { icon: FileMedium, title: "6 A/B Tests Conducted" },
    { icon: PaperPlaneMedium, title: "1 Feature In Development" },
  ]
  const learningsContents1 = [
    {
      header: "01",
      title: "Be problem passionate",
      description:
        "Not hitting the nail on the head the first time (or even the 10th) is fine so long as you have learned something for your next attempt!",
    },
    {
      header: "02",
      title: "Alignment is key",
      description:
        "Involving a variety of people from different disciplines and teams can help you identify problems early on and make a product that is both exciting to use (and make if you're an engineer).",
    },
  ]
  const learningsContents2 = [
    {
      header: "03",
      title: "Working within systems",
      description:
        "Understanding the systems, where your product sits within them, and a clear understanding of the problem will help prevent scope-creep.",
    },
    {
      header: "04",
      title: "Empathy for niche users",
      description: (
        <>
          <Typography variant="body2">
            Designing the custom tools for internal customers was an incredible
            learning opportunity on gaining empathy with a very rare and unique
            user.
          </Typography>
        </>
      ),
    },
  ]

  return (
    <>
      <ScrollToTopOnMount />
      <ArticlePage
        title={"Riot Games"}
        subtitle={"A summer of unforgettable experiences"}
        bannerImage={TibbersBanner}
      >
        <ArticleSection>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Card
              variant={"text"}
              image={CalendarSmall}
              isIcon
              large
              title={"Schedule a call"}
              description="My Riot projects are confidential, but I'd be happy to discuss my experience with you in a call. Interested? :)"
              onClick={() => {
                window.open(
                  "https://calendly.com/vyzhng/vicky-zheng-1-1",
                  "_blank",
                  "noopener,noreferrer"
                )
              }}
            />
          </Box>
          <ArticleHeader sectionType="Introduction" title="Overview">
            {headerBody}
          </ArticleHeader>
          <TextTable contents={teamTableContents} />
          <RoundButton
            text="Read the medium article"
            icon={EyeSmall}
            onClick={() => {
              window.open(mediumLink, "_blank", "noopener,noferrer") // noopener,noreferrer makes this open in a new window
            }}
          />
          <ArticleSubsection title="Responsibilities">
            <Box>
              <Typography variant="body2">
                Upon completing orientation and meeting my teams, I was able to
                hit the ground running by joining my teams weekly rituals and
                familiarizing myself with the projects and what needs to be
                done. Because I had 6 weeks to work on one project at a time, it
                was an incredibly demanding yet rewarding challenge to overcome.
                Part of my responsibilities as a designer involved{" "}
                <strong>
                  researching, designing, and prototyping wireframes, as well as
                  facilitating stakeholder feedback sessions
                </strong>{" "}
                across a diverse cast of roles.
              </Typography>
              <Typography variant="body2">
                <br />
                The remote model of work also enabled me to work with teams
                across 2 timezones. My projects also gave me a variety of
                stakeholders and constraints to work with that really made this
                internship unique.
              </Typography>
            </Box>
          </ArticleSubsection>
          <RoundButton
            text="Skip to takeaways"
            icon={ArrowDown}
            onClick={() => {
              skipToSection(takeawaysSection, false)
            }}
          />
        </ArticleSection>
        <ArticleSection>
          <ArticleHeader
            title="Best Internship Ever"
            sectionType="My Experience"
          >
            <Typography variant="body2">
              For a week we were flown down to Riot's LAX campus and got to
              enjoy all the perks Riot has to offer. This was actually my first
              time down in the states and was a week full of events and
              escapades. From eating free food every day at NOMS with fellow
              interns to celebrating my birthday with Riot, exploring LA and
              Riot Campus was definitely a memorable adventure.
            </Typography>
          </ArticleHeader>
          {/* <ImageCarousel images={carouselImages} /> */}
          <img
            src={Image7}
            width="100%"
            style={{ borderRadius: "16px", marginBottom: "64px" }}
          />
          <ArticleSubsection title="My Teams">
            <Box>
              <Typography variant="body2">
                I got to{" "}
                <strong>work across 2 teams on 2 different projects</strong> for
                the duration of my internship. My first team was based in
                Dublin, Ireland and was 5 hours ahead of me while my second team
                was based in LA and was 3 hours behind me.
              </Typography>
              <Typography variant="body2">
                <br />
                Working between timezones was a very interesting challenge that
                I was able to overcome because of the awesome personalities in
                my teams. This also meant that I had a lot of independent time
                to take initiative while my design mentors were gone, which
                really enabled me to gain the courage to reach out to other
                designers for feedback and resources by myself.
              </Typography>
            </Box>
          </ArticleSubsection>
          <img
            src={Image2}
            width="100%"
            style={{ borderRadius: "16px", marginBottom: "64px" }}
          />
          <ArticleSubsection title="Summer Statistics">
            <ThreeColumnTable contents={summerStatsContents1} />
            <ThreeColumnTable contents={summerStatsContents2} />
          </ArticleSubsection>
        </ArticleSection>
        <ArticleSection>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Card
              variant={"text"}
              image={CalendarSmall}
              isIcon
              large
              title={"Schedule a call"}
              description="My Riot projects are confidential, but I'd be happy to discuss my experience with you in a call. Interested? :)"
              onClick={() => {
                window.open(
                  "https://calendly.com/vyzhng/vicky-zheng-1-1",
                  "_blank",
                  "noopener,noreferrer"
                )
              }}
            />
          </Box>
          <ArticleHeader
            title="Learnings & Takeaways"
            sectionType="Retrospective"
            ref={takeawaysSection}
          >
            <Typography variant="body2">
              When my internship came to a close, I offered to write about my
              internship experiences for aspiring future UX interns at Riot.
              Through recounting the events of this summer, I was able to
              reflect on my experiences. There were many things I learned during
              my time at Riot as a result of being able to speak with so many
              people from different roles and backgrounds, but my top 4
              takeaways are as follows.
            </Typography>
          </ArticleHeader>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 4 }}>
            <TwoColumnTable contents={learningsContents1} />
            <TwoColumnTable contents={learningsContents2} />
          </Box>
        </ArticleSection>
      </ArticlePage>
      <ArticleEnd otherArticles={["behive", "triyo"]} />
      <HomeButton />
    </>
  )
}
