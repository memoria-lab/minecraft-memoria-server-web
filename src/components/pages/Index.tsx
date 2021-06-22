import DiscordIcon from 'components/elements/icons/DiscordIcon'
import ModIcon from 'components/elements/icons/ModIcon'
import OwnerIcon from 'components/elements/icons/OwnerIcon'
import ServerIcon from 'components/elements/icons/ServerIcon'
import TwitterIcon from 'components/elements/icons/TwitterIcon'
import ExternalLink from 'components/elements/texts/ExternalLink'
import Text from 'components/elements/texts/Text'
import MainTemplate from 'components/templates/MainTemplate'
import modInfo from 'data/modInfo.json'
import MemoriaIcon from 'images/memoria.png'
import React from 'react'
import styled from 'styled-components'

const Page: React.FC = () => {
  return (
    <IndexArea>
      <ContentArea>
        <MainTemplate
          title="Owner"
          icon={<OwnerIcon />}
          color="var(--color-1)"
          content={
            <ItemArea>
              <OwnerArea href="https://twitter.com/memoria_myr" target="_blank">
                <Avatar src={MemoriaIcon} />
                <Text fontSize="22px">めもりあ</Text>
                <TwitterIcon />
              </OwnerArea>
            </ItemArea>
          }
        />
        <MainTemplate
          title="Server"
          icon={<ServerIcon />}
          color="var(--color-2)"
          content={
            <ItemArea>
              <Text fontSize="22px">サーバーアドレス: minecraft.mmra.me</Text>
              <DescriptionArea>
                <Text fontSize="14px">
                  {
                    'ホワイトリスト制のため、参加したい場合は めもりあ までご連絡ください。'
                  }
                </Text>
              </DescriptionArea>
            </ItemArea>
          }
        />
        <MainTemplate
          title="Discord"
          icon={<DiscordIcon />}
          color="var(--color-3)"
          content={
            <ItemArea>
              <ExternalLink
                link="https://discord.gg/n3PskQp4WN"
                color="var(--color-3)"
              >
                <Text fontSize="22px">Discordめもりあ鯖に参加</Text>
              </ExternalLink>
              <DescriptionArea>
                <Text fontSize="14px">
                  {
                    'MinecraftやApex Legendsなど、ゲーム用のDiscordサーバーです。'
                  }
                </Text>
              </DescriptionArea>
            </ItemArea>
          }
        />
        <MainTemplate
          title="Mod pack"
          icon={<ModIcon />}
          color="var(--color-4)"
          content={
            <ItemArea>
              <ExternalLink
                link="https://1drv.ms/u/s!Av1EU_orzq3uqpNqzFSe7FV4Lj2ZJw?e=yRX7qC"
                color="var(--color-4)"
              >
                <Text fontSize="22px">MODをまとめてダウンロード</Text>
              </ExternalLink>
              <DescriptionArea>
                <Text fontSize="14px">
                  {'必要なクライアントMODをまとめたものです。'}
                </Text>
              </DescriptionArea>
            </ItemArea>
          }
        />
        <MainTemplate
          title="Mods"
          icon={<ModIcon />}
          color="var(--color-4)"
          content={
            <ItemArea>
              {modInfo.mods.map((mod) => (
                <ModArea key={mod.name}>
                  <ExternalLink link={mod.link} color="var(--color-4)">
                    <Text fontSize="22px">{mod.name}</Text>
                  </ExternalLink>
                  <DescriptionArea>
                    {mod.serverOnly && (
                      <Text fontSize="10px">（サーバーのみ）</Text>
                    )}
                    {mod.clientOnly && (
                      <Text fontSize="10px">（クライアントのみ）</Text>
                    )}
                    <Text fontSize="14px">{mod.description}</Text>
                  </DescriptionArea>
                </ModArea>
              ))}
            </ItemArea>
          }
        />
      </ContentArea>
    </IndexArea>
  )
}

const IndexArea = styled.div`
  font-weight: bold;
`

const ContentArea = styled.div`
  max-width: 900px;
  padding: 80px 32px;
  margin: 0 auto;
`

const ItemArea = styled.div`
  margin-top: 32px;
  margin-bottom: 80px;
  margin-left: 40px;
`

const OwnerArea = styled.a`
  display: inline-flex;
  align-items: center;
  color: var(--color-1);
  & > * {
    margin-right: 24px;
  }
  &:hover {
    opacity: 0.7;
  }
`

const Avatar = styled.img`
  width: 48px;
`

const DescriptionArea = styled.div`
  display: flex;
  align-items: center;
  margin-top: 24px;
  margin-left: 16px;
`

const ModArea = styled.div`
  margin: 24px 0;
`

export default Page
