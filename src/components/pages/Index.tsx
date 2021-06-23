import DiscordIcon from 'components/elements/icons/DiscordIcon'
import ModIcon from 'components/elements/icons/ModIcon'
import OwnerIcon from 'components/elements/icons/OwnerIcon'
import ServerIcon from 'components/elements/icons/ServerIcon'
import TwitterIcon from 'components/elements/icons/TwitterIcon'
import ExternalLink from 'components/elements/texts/ExternalLink'
import Text from 'components/elements/texts/Text'
import MainTemplate from 'components/templates/MainTemplate'
import joinProcess from 'data/joinProcess.json'
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
                <Text fontSize="14px">
                  {
                    'MODを導入しているサーバーのため、クライアント側もMODの導入が必要です。下の方の参加手順をご覧ください。'
                  }
                </Text>
                <Text fontSize="14px">
                  {'よく分からない方は めもりあ までご連絡ください。'}
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
          title="Join"
          icon={<OwnerIcon />}
          color="var(--color-1)"
          content={
            <ItemArea>
              <Text fontSize="22px">マイクラめもりあ鯖に参加する手順</Text>
              {joinProcess.processes.map((process, index) => (
                <JoinDescriptionArea key={process.description}>
                  <Text fontSize="16px">
                    {index + 1}. {process.description}
                  </Text>
                  {process.subdescriptions?.map((subdescription) => (
                    <Text fontSize="14px" bold key={subdescription}>
                      {subdescription}
                    </Text>
                  ))}
                </JoinDescriptionArea>
              ))}
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
                  <ModDescriptionArea>
                    {mod.serverOnly && (
                      <Text fontSize="10px">（サーバーのみ）</Text>
                    )}
                    {mod.clientOnly && (
                      <Text fontSize="10px">（クライアントのみ）</Text>
                    )}
                    <Text fontSize="14px">{mod.description}</Text>
                  </ModDescriptionArea>
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
  margin-top: 24px;
  margin-left: 16px;

  & * + * {
    margin-top: 16px;
  }
`

const ModDescriptionArea = styled(DescriptionArea)`
  display: flex;
  align-items: center;

  & * + * {
    margin-top: 0;
  }
`

const JoinDescriptionArea = styled(DescriptionArea)`
  display: flex;
  flex-direction: column;
  margin-bottom: 32px;

  & * + * {
    margin-top: 16px;
    margin-left: 24px;
  }
`

const ModArea = styled.div`
  margin: 24px 0;
`

export default Page
