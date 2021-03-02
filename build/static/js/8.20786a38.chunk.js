(this["webpackJsonpthefront-js--react-scripts"]=this["webpackJsonpthefront-js--react-scripts"]||[]).push([[8],{723:function(n,a,o){"use strict";o.r(a),o.d(a,"default",(function(){return m}));var t=o(1),e=o(0),i=(o(2),o(691)),c=o(657),s=o(151),r=o(4),l=[{name:"companyInfo",type:"string",default:"",description:"Company info in the card"},{name:"companyLogo",type:"string",default:"",description:"Company logo of the card"},{name:"companyName",type:"string",default:"",description:"Company name of the card"},{name:"jobLocation",type:"string",default:"",description:"Job location of the card"},{name:"jobTitle",type:"string",default:"",description:"Job title of the card"},{name:"jobsCount",type:"string",default:"",description:"Count of the jobs in the the card"},{name:"className",type:"string",default:"",description:"External classes"}],m=function(n){var a=Object.assign({},n);return Object(e.jsxs)("div",Object(t.a)(Object(t.a)({},a),{},{children:[Object(e.jsx)(s.e,{title:"Description",gutterBottom:!0,children:Object(e.jsx)(s.b,{title:"CardJobCompany",path:"src/components/organisms/CardJobCompany/CardJobCompany.js",description:"Component to display the job card company"})}),Object(e.jsx)(s.e,{title:"Import",gutterBottom:!0,children:Object(e.jsx)(s.a,{code:"\nimport { CardJobCompany } from 'components/organisms';\n// or\nimport CardJobCompany from 'components/organisms/CardJobCompany';\n"})}),Object(e.jsx)(s.e,{title:"Props & Methods",gutterBottom:!0,children:Object(e.jsx)(s.d,{dataProperties:l})}),Object(e.jsx)(s.e,{title:"Basic Example",gutterBottom:!0,children:Object(e.jsxs)(e.Fragment,{children:[Object(e.jsx)(i.a,{marginBottom:2,padding:2,border:"1px solid #ccc",borderRadius:"4px",overflow:"auto",children:Object(e.jsx)(i.a,{display:"flex",justifyContent:"space-around",alignItems:"center",minWidth:"1000px",children:Object(e.jsxs)(c.a,{container:!0,spacing:2,children:[Object(e.jsx)(c.a,{item:!0,xs:4,children:Object(e.jsx)(r.f,{jobTitle:"Senior Developer",jobLocation:"Milan, Italy",companyName:"Slack",companyLogo:"https://assets.maccarianagency.com/the-front/logos/slack.svg",jobsCount:"2 jobs",companyInfo:"Sync your team's work and activity to share automatically in a channel with a simple plugin."})}),Object(e.jsx)(c.a,{item:!0,xs:4,children:Object(e.jsx)(r.f,{jobTitle:"Web designer internship",jobLocation:"Milan, Italy",companyName:"Slack",companyLogo:"https://assets.maccarianagency.com/the-front/logos/slack.svg",jobsCount:"2 jobs",companyInfo:"Sync your team's work and activity to share automatically in a channel with a simple plugin."})}),Object(e.jsx)(c.a,{item:!0,xs:4,children:Object(e.jsx)(r.f,{jobTitle:"UI/UX Designer",jobLocation:"Milan, Italy",companyName:"Slack",companyLogo:"https://assets.maccarianagency.com/the-front/logos/slack.svg",jobsCount:"2 jobs",companyInfo:"Sync your team's work and activity to share automatically in a channel with a simple plugin."})})]})})}),Object(e.jsx)(s.a,{code:'\nimport React from \'react\';\nimport { Box, Grid } from \'@material-ui/core\';\nimport { CardJobCompany } from \'components/organisms\';\n\nexport default function Example() {\n  return (\n    <Box marginBottom={2} display="flex" justifyContent="space-evenly" alignItems="center" padding={2} border="1px solid #ccc" borderRadius="4px">\n      <Grid container spacing={2}>\n        <Grid item xs={4}>\n          <CardJobCompany\n            jobTitle="Senior Developer"\n            jobLocation="Milan, Italy"\n            companyName="Slack"\n            companyLogo="https://assets.maccarianagency.com/the-front/logos/slack.svg"\n            jobsCount="2 jobs"\n            companyInfo="Sync your team\'s work and activity to share automatically in a channel with a simple plugin."\n          />\n        </Grid>\n        <Grid item xs={4}>\n          <CardJobCompany\n            jobTitle="Web designer internship"\n            jobLocation="Milan, Italy"\n            companyName="Slack"\n            companyLogo="https://assets.maccarianagency.com/the-front/logos/slack.svg"\n            jobsCount="2 jobs"\n            companyInfo="Sync your team\'s work and activity to share automatically in a channel with a simple plugin."\n          />\n        </Grid>\n        <Grid item xs={4}>\n          <CardJobCompany\n            jobTitle="UI/UX Designer"\n            jobLocation="Milan, Italy"\n            companyName="Slack"\n            companyLogo="https://assets.maccarianagency.com/the-front/logos/slack.svg"\n            jobsCount="2 jobs"\n            companyInfo="Sync your team\'s work and activity to share automatically in a channel with a simple plugin."\n          />\n        </Grid>\n      </Grid>\n    </Box>\n  );\n}\n'})]})}),Object(e.jsx)(s.e,{title:"Outlined",gutterBottom:!0,children:Object(e.jsxs)(e.Fragment,{children:[Object(e.jsx)(i.a,{marginBottom:2,padding:2,border:"1px solid #ccc",borderRadius:"4px",overflow:"auto",children:Object(e.jsx)(i.a,{display:"flex",justifyContent:"space-around",alignItems:"center",minWidth:"1000px",children:Object(e.jsxs)(c.a,{container:!0,spacing:2,children:[Object(e.jsx)(c.a,{item:!0,xs:4,children:Object(e.jsx)(r.f,{jobTitle:"Senior Developer",jobLocation:"Milan, Italy",companyName:"Slack",companyLogo:"https://assets.maccarianagency.com/the-front/logos/slack.svg",jobsCount:"2 jobs",companyInfo:"Sync your team's work and activity to share automatically in a channel with a simple plugin.",variant:"outlined"})}),Object(e.jsx)(c.a,{item:!0,xs:4,children:Object(e.jsx)(r.f,{jobTitle:"Web designer internship",jobLocation:"Milan, Italy",companyName:"Slack",companyLogo:"https://assets.maccarianagency.com/the-front/logos/slack.svg",jobsCount:"2 jobs",companyInfo:"Sync your team's work and activity to share automatically in a channel with a simple plugin.",variant:"outlined"})}),Object(e.jsx)(c.a,{item:!0,xs:4,children:Object(e.jsx)(r.f,{jobTitle:"UI/UX Designer",jobLocation:"Milan, Italy",companyName:"Slack",companyLogo:"https://assets.maccarianagency.com/the-front/logos/slack.svg",jobsCount:"2 jobs",companyInfo:"Sync your team's work and activity to share automatically in a channel with a simple plugin.",variant:"outlined"})})]})})}),Object(e.jsx)(s.a,{code:'\nimport React from \'react\';\nimport { Box, Grid } from \'@material-ui/core\';\nimport { CardJobCompany } from \'components/organisms\';\n\nexport default function Example() {\n  return (\n    <Box marginBottom={2} display="flex" justifyContent="space-evenly" alignItems="center" padding={2} border="1px solid #ccc" borderRadius="4px">\n      <Grid container spacing={2}>\n        <Grid item xs={4}>\n          <CardJobCompany\n            jobTitle="Senior Developer"\n            jobLocation="Milan, Italy"\n            companyName="Slack"\n            companyLogo="https://assets.maccarianagency.com/the-front/logos/slack.svg"\n            jobsCount="2 jobs"\n            companyInfo="Sync your team\'s work and activity to share automatically in a channel with a simple plugin."\n            variant="outlined"\n          />\n        </Grid>\n        <Grid item xs={4}>\n          <CardJobCompany\n            jobTitle="Web designer internship"\n            jobLocation="Milan, Italy"\n            companyName="Slack"\n            companyLogo="https://assets.maccarianagency.com/the-front/logos/slack.svg"\n            jobsCount="2 jobs"\n            companyInfo="Sync your team\'s work and activity to share automatically in a channel with a simple plugin."\n            variant="outlined"\n          />\n        </Grid>\n        <Grid item xs={4}>\n          <CardJobCompany\n            jobTitle="UI/UX Designer"\n            jobLocation="Milan, Italy"\n            companyName="Slack"\n            companyLogo="https://assets.maccarianagency.com/the-front/logos/slack.svg"\n            jobsCount="2 jobs"\n            companyInfo="Sync your team\'s work and activity to share automatically in a channel with a simple plugin."\n            variant="outlined"\n          />\n        </Grid>\n      </Grid>\n    </Box>\n  );\n}\n'})]})}),Object(e.jsx)(s.e,{title:"Custom Shadow and LiftUp Effect",gutterBottom:!0,children:Object(e.jsxs)(e.Fragment,{children:[Object(e.jsx)(i.a,{marginBottom:2,padding:2,border:"1px solid #ccc",borderRadius:"4px",overflow:"auto",children:Object(e.jsx)(i.a,{display:"flex",justifyContent:"space-around",alignItems:"center",minWidth:"1000px",children:Object(e.jsxs)(c.a,{container:!0,spacing:2,children:[Object(e.jsx)(c.a,{item:!0,xs:4,children:Object(e.jsx)(r.f,{jobTitle:"Senior Developer",jobLocation:"Milan, Italy",companyName:"Slack",companyLogo:"https://assets.maccarianagency.com/the-front/logos/slack.svg",jobsCount:"2 jobs",companyInfo:"Sync your team's work and activity to share automatically in a channel with a simple plugin.",withShadow:!0,liftUp:!0})}),Object(e.jsx)(c.a,{item:!0,xs:4,children:Object(e.jsx)(r.f,{jobTitle:"Web designer internship",jobLocation:"Milan, Italy",companyName:"Slack",companyLogo:"https://assets.maccarianagency.com/the-front/logos/slack.svg",jobsCount:"2 jobs",companyInfo:"Sync your team's work and activity to share automatically in a channel with a simple plugin.",withShadow:!0,liftUp:!0})}),Object(e.jsx)(c.a,{item:!0,xs:4,children:Object(e.jsx)(r.f,{jobTitle:"UI/UX Designer",jobLocation:"Milan, Italy",companyName:"Slack",companyLogo:"https://assets.maccarianagency.com/the-front/logos/slack.svg",jobsCount:"2 jobs",companyInfo:"Sync your team's work and activity to share automatically in a channel with a simple plugin.",withShadow:!0,liftUp:!0})})]})})}),Object(e.jsx)(s.a,{code:'\nimport React from \'react\';\nimport { Box, Grid } from \'@material-ui/core\';\nimport { CardJobCompany } from \'components/organisms\';\n\nexport default function Example() {\n  return (\n    <Box marginBottom={2} display="flex" justifyContent="space-evenly" alignItems="center" padding={2} border="1px solid #ccc" borderRadius="4px">\n      <Grid container spacing={2}>\n        <Grid item xs={4}>\n          <CardJobCompany\n            jobTitle="Senior Developer"\n            jobLocation="Milan, Italy"\n            companyName="Slack"\n            companyLogo="https://assets.maccarianagency.com/the-front/logos/slack.svg"\n            jobsCount="2 jobs"\n            companyInfo="Sync your team\'s work and activity to share automatically in a channel with a simple plugin."\n            withShadow\n            liftUp\n          />\n        </Grid>\n        <Grid item xs={4}>\n          <CardJobCompany\n            jobTitle="Web designer internship"\n            jobLocation="Milan, Italy"\n            companyName="Slack"\n            companyLogo="https://assets.maccarianagency.com/the-front/logos/slack.svg"\n            jobsCount="2 jobs"\n            companyInfo="Sync your team\'s work and activity to share automatically in a channel with a simple plugin."\n            withShadow\n            liftUp\n          />\n        </Grid>\n        <Grid item xs={4}>\n          <CardJobCompany\n            jobTitle="UI/UX Designer"\n            jobLocation="Milan, Italy"\n            companyName="Slack"\n            companyLogo="https://assets.maccarianagency.com/the-front/logos/slack.svg"\n            jobsCount="2 jobs"\n            companyInfo="Sync your team\'s work and activity to share automatically in a channel with a simple plugin."\n            withShadow\n            liftUp\n          />\n        </Grid>\n      </Grid>\n    </Box>\n  );\n}\n'})]})})]}))}}}]);