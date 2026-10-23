export type Publication = {
  title: string;
  authors: string;
  venue: string;
  year: string;
  type: 'Journal article' | 'Conference paper' | 'Doctoral thesis';
  url?: string;
};

export const publications: Publication[] = [
  {
    title:
      'Granularity as Analytical Cut: A Diagrammatic Approach to Situated Mediation Analysis in Postphenomenological Design Research',
    authors: 'Peng Lu',
    venue: 'Adjunct Proceedings of the 14th Nordic Conference on Human-Computer Interaction (NordiCHI 2026 Adjunct)',
    year: '2026',
    type: 'Conference paper',
    url: 'https://doi.org/10.1145/3821402.3830102',
  },
  {
    title: 'Feeling together with the car: towards theorizing co-driving pleasure from a technological mediation perspective',
    authors: 'Peng Lu',
    venue: 'Doctoral dissertation, Politecnico di Milano',
    year: '2025',
    type: 'Doctoral thesis',
    url: 'https://hdl.handle.net/10589/238659',
  },
  {
    title: 'Speculative Exploration on Future Sustainable Human-Machine Interface Design in Automated Shuttle Buses',
    authors: 'Ming Yan, Zijun Lin, Peng Lu, Mansu Wang, Lucia Rampino, and Giandomenico Caruso',
    venue: 'Sustainability, 15(6), 5497',
    year: '2023',
    type: 'Journal article',
    url: 'https://doi.org/10.3390/su15065497',
  },
  {
    title: 'Systemic Design Strategies for Shaping the Future of Automated Shuttle Buses',
    authors: 'Ming Yan, Peng Lu, Venanzio Arquilla, Fausto Brevi, Lucia Rampino, and Giandomenico Caruso',
    venue: 'Applied Sciences, 13(21), 11767',
    year: '2023',
    type: 'Journal article',
    url: 'https://doi.org/10.3390/app132111767',
  },
  {
    title: 'Toward Hazard or Action? Effects of Directional Vibrotactile Takeover Requests on Takeover Performance in Automated Driving',
    authors: 'Jinlei Shi, Changxu Wu, Hanjia Zheng, Wei Zhang, Xiyuan Zhang, Peng Lu, and Chunlei Chai',
    venue: 'International Journal of Human-Computer Interaction, 39(19), 3786–3801',
    year: '2023',
    type: 'Journal article',
    url: 'https://doi.org/10.1080/10447318.2022.2105479',
  },
  {
    title: 'An Exploration UX Automotive in the 5G Era: New Interaction Processes Through Gesture Control and Haptic Feedback',
    authors: 'Venanzio Arquilla, Fausto Brevi, Federica Caruso, Flora Gaetani, and Peng Lu',
    venue: 'DeSForM 2023',
    year: '2023',
    type: 'Conference paper',
    url: 'https://hdl.handle.net/11311/1261905',
  },
  {
    title: 'Feeling the Future Car: Designing for Driving Pleasure in the Era of Co-Driving',
    authors: 'Peng Lu',
    venue: 'Cumulus PhD Network',
    year: '2023',
    type: 'Conference paper',
    url: 'https://re.public.polimi.it/retrieve/fd23c386-3bc0-4d5f-a3b5-282af4fdce02/BWConferenceproceedings.pdf',
  },
  {
    title: 'Exploring Implications for Designing for Sociotechnical Transitions: Taking Reflexivity as a Matter of Scale',
    authors: 'Peng Lu and Daniela Sangiorgi',
    venue: 'Proceedings of the 9th Nordes Design Research Conference',
    year: '2021',
    type: 'Conference paper',
    url: 'https://doi.org/10.21606/nordes.2021.24',
  },
  {
    title: 'An Application Framework of Service Design for Servitization',
    authors: 'Peng Lu',
    venue: 'ServDes.2020: Tensions, Paradoxes and Plurality Conference Proceedings',
    year: '2021',
    type: 'Conference paper',
    url: 'https://doi.org/10.21606/servdes2020.8',
  },
];

export const researchProfiles = [
  {
    label: 'Google Scholar',
    url: 'https://scholar.google.com/citations?user=KaqQ8gIAAAAJ',
  },
  {
    label: 'ORCID',
    url: 'https://orcid.org/0000-0002-9691-360X',
  },
];
