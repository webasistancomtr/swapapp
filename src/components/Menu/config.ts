import { MenuEntry } from '@pancakeswap-libs/uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: 'https://dogoswap.finance/',
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    initialOpenState: true,
    items: [
      {
        label: 'Exchange',
        href: 'https://dogoswap.finance/exchange/#/swap',
      },
      {
        label: 'Liquidity',
        href: 'https://dogoswap.finance/exchange/#/pool',
      },
    ],
  },
  {
    label: 'Farms',
    icon: 'FarmIcon',
    href: 'https://dogoswap.finance/farms',
  },
  {
    label: 'Pools',
    icon: 'PoolIcon',
    href: 'https://dogoswap.finance/pools',
  },
  {
    label: 'Lottery',
    icon: 'TicketIcon',
    href: 'https://dogoswap.finance/lottery',
  },
  {
    label: 'IFO',
    icon: 'IfoIcon',
    href: 'https://dogoswap.finance/ifo',
  },
  {
    label: 'More',
    icon: 'MoreIcon',
    items: [
      {
        label: 'Twitter',
        href: '#twitterlink',
      },
      {
        label: 'Telegram',
        href: '#telegramlink',
      },
    ],
  },
]

export default config
