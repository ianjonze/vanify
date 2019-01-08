const makeOptions = [
  { value: 'Vauxhall', logoUrl: 'http://vanify.co.uk/wp-content/uploads/2018/12/vauxhall_reduc.png', makeId: 1 },
  { value: 'Volkswagen', logoUrl: 'http://vanify.co.uk/wp-content/uploads/2018/12/Volkswagen_reduc.png', makeId: 2 },
  { value: 'Ford', logoUrl: 'http://vanify.co.uk/wp-content/uploads/2018/12/Ford_reduc.png', makeId: 3 },
  { value: 'Renault', logoUrl: 'http://vanify.co.uk/wp-content/uploads/2018/12/Renault_reduc.png', makeId: 4 },
  { value: 'Mercedes', logoUrl: 'https://i.dlpng.com/static/png/269132_preview.png', makeId: 5 }
]

const modelOptions = {
  1: [{
      model: 'Vivaro SWB 2015+',
      Id: 1
    },
    {
      model: 'Vivaro LWB 2015+',
      makeId: 2
    },
    {
      model: 'Vivaro SWB pre 2014',
      makeId: 3
    },
    {
      model: 'Vivaro LWB pre 2014',
      makeId: 4
    }
  ],
  2: [{
    model: 'Transporter T5 T6',
    makeId: 2
  }],
  3: [{
      model: 'Connect SWB 2014+',
      makeId: 1
    },
    {
      model: 'Connect LWB 2014+',
      makeId: 1
    },
    {
      model: 'Connect SWB pre 2014',
      makeId: 1
    },
    {
      model: 'Connect LWB pre 2014',
      makeId: 1
    }
  ],
  4: [{
      model: 'Trafic SWB 2015+',
      makeId: 3
    },
    {
      model: 'Trafic LWB 2015+',
      makeId: 3
    },
    {
      model: 'Trafic SWB pre 2014',
      makeId: 3
    },
    {
      model: 'Trafic LWB pre 2014',
      makeId: 3
    }
  ],
  5: [{
    model: 'Vito SWB',
    makeId: 5
  }]
}

exports.makeOptions = makeOptions
exports.modelOptions = modelOptions
