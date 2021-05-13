import { MenuEntry } from '@pancakeswap-libs/uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: 'https://www.alchemistdefi.com/',
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    items: [
      {
        label: 'Exchange',
        href: 'https://exchange.alchemistdefi.com/#/swap',
      },
      {
        label: 'Liquidity',
        href: 'https://exchange.alchemistdefi.com/#/pool',
      },
    ],
  },
  {
    label: 'Mist Info',
    icon: 'RecipeIcon',
    items: [
      {
        label: 'Recipes',
        href: 'https://www.alchemistdefi.com/farms',
      },
      {
        label: 'Spells',
        href: 'https://www.alchemistdefi.com/nests',
      },
      {
        label: 'MIST Price Chart',
        href: 'https://charts.bogged.finance/?token=0x6f8fe12cc34398d15b7d5a5ba933e550da1d099f',
      },    
    ],
  },
  {
    label: 'Aurum Info',
    icon: 'PoolIcon',
    items: [
      {
        label: 'Enchanted Chamber',
        href: 'https://www.aurum.alchemistdefi.com/aurum',
      },
      {
        label: 'Aurum Enchantment',
        href: 'https://www.aurum.alchemistdefi.com/vessels',
      },
      {
        label: 'Aurum Spells',
        href: 'https://www.aurum.alchemistdefi.com/spells',
      },
      {
        label: 'Aurum Price Chart',
        href: 'https://charts.bogged.finance/?token=0x49207BAA3a7332F0716788aa57B088D499bcc104',
      }    
    ],
  },
  {
    label: 'TechRate Audit',
    icon: 'AuditIcon',
    href: 'https://www.alchemistdefi.com/files/TechrateAudit11042021.pdf',
  },  
  {
    label: 'Partnerships',
    icon: 'HandshakeIcon',
    items: [
      {
        label: 'Knights Defi',
        href: 'https://www.knightsdefi.com/',
      },
      {
        label: 'BSCDog',
        href: 'https://bscdog.com/',
      }
    ],
  },{
    label: 'Project Documentation',
    icon: 'RoadmapIcon',
    href: 'https://docs.alchemistdefi.com/',
  }, 
  {
    label: 'More Info',
    icon: 'MoreIcon',
    items: [
      {
        label: 'Official Github',
        href: 'https://github.com/Alchemist-defi/',
      },
      {
        label: 'Medium Blog',
        href: 'https://alchemistdefi.medium.com',
      }
    ],
  }
]

export default config
