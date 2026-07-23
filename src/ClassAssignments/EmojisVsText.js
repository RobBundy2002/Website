import CaseStudy from '../components/CaseStudy';
import { Link } from 'react-router-dom';

const EmojisVsText = () => {
  const sections = [
    {
      heading: 'Abstract',
      content: `This study investigates how well young adults interpret emotional sentiments in digital messages when the textual and visual cues are incongruent. Fifty participants completed an emotional classification survey with texts from three conditions: congruent (text and emoji sentiments matched), contradictory (text and emoji sentiments conflicted), and control (text only). Accuracy was substantially higher in the congruent condition (M = 94.6%) than in the contradictory condition (M = 68.6%), and reaction times were longer in contradictory trials. In the contradictory condition, 31.4% of responses were misclassified, with nearly each error reflecting the emoji’s valence rather than the text’s, providing evidence of a dominance towards visual elements during conflict resolution.`
    },
    {
      heading: 'Introduction',
      content: `Digital communication now routinely mixes text and visual icons (emojis). This work examines how recipients integrate these channels and what happens when they conflict. Emojis can mimic facial expressions and carry paralinguistic meaning; however, when text and emoji mismatch, recipients must resolve the conflict, which may produce measurable costs in accuracy, reaction time, and confidence.`
    },
    {
      heading: 'Theoretical framing',
      content: `The study draws on dual coding theory (verbal and non-verbal channels) and visual salience research. Dual coding predicts faster, more accurate responses when channels are congruent; visual salience predicts emojis may capture attention and bias judgments when conflicting with text.`
    },
    {
      heading: 'Experiment design',
      content: `Fifty participants (40 age 18-24, 10 older) completed 30 stimuli (10 congruent, 10 contradictory, 10 control). Each stimulus was a short message; participants judged valence, rated confidence on a 5-point scale, and reaction time was recorded. Stimuli were validated by independent raters prior to the experiment.`
    },
    {
      heading: 'Results (summary)',
      content: `Congruent condition accuracy: M = 94.6%. Contradictory: M = 68.6%; Control: used as baseline for RT/confidence. Reaction times were longer for contradictory trials. Confidence dropped in the contradictory condition. Error analysis shows 31.4% misclassification in contradictory trials—most errors followed emoji valence.`
    },
    {
      heading: 'Discussion',
      content: `Findings support the idea that emojis can dominate text during conflict resolution. This has implications for cognitive theories of multimodal integration and for applied domains such as sentiment analysis and UI/UX design. Models must account for visual dominance rather than treating text and emoji as additive equally-weighted features.`
    },
    {
      heading: 'Conclusion & limitations',
      content: `The study demonstrates robust costs for contradictory emoji-text pairings; however, sample size and context limitations mean the results should be generalized cautiously. Future work should explore conversational context, broader emoji types, and larger diverse samples.`
    }
  ];

  return (
    <div className="page-container">
      <div className="content-container">
        <CaseStudy
          title={`Emojis vs. Text: Unpacking Emotional Conflicts in Modern Digital Communication Forums`}
          subtitle={`Class project writeup (PDF available)`}
          image={`${process.env.PUBLIC_URL}/Images/Emoji.png`}
          date={`2026`}
          role={`Author & Researcher`}
          tech={["Python", "HTML", "React"]}
          links={[{ href: `/ProjectWriteupGT.pdf`, label: 'View Final Report', download: true }]}
          sections={sections}
        />

        <div style={{ marginTop: 'var(--spacing-2xl)' }}>
          <Link to="/Website/classassignments" className="back-button">← Back to Assignments</Link>
        </div>
      </div>
    </div>
  );
};

export default EmojisVsText;
