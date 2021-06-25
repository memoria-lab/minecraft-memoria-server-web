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
        <Text fontSize="32px" color="var(--color-1)" margin="0 0 80px">
          マイクラめもりあ鯖
        </Text>
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
              <Text fontSize="22px">サーバーアドレス : minecraft.mmra.me</Text>
              <Text fontSize="18px" margin="16px 0 0">
                バージョン : forge 1.12.2
              </Text>
              <DescriptionArea>
                <Text fontSize="16px">
                  {'MOD導入済みのサバイバルサーバーです。'}
                </Text>
                <Text fontSize="16px">
                  {
                    'ホワイトリスト制のため、参加したい場合は めもりあ までご連絡ください。'
                  }
                </Text>
                <Text fontSize="16px">
                  {
                    'MODを導入しているサーバーのため、クライアント側もMODの導入が必要です。下の方の参加手順をご覧ください。'
                  }
                </Text>
                <Text fontSize="16px">
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
                <Text fontSize="16px">
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
                  <Text fontSize="18px">
                    {index + 1}. {process.description}
                  </Text>
                  {process.subdescriptions?.map((subdescription) => (
                    <Text fontSize="16px" bold key={subdescription}>
                      {subdescription}
                    </Text>
                  ))}
                </JoinDescriptionArea>
              ))}
            </ItemArea>
          }
        />
        <MainTemplate
          title="Mod Pack"
          icon={<ModIcon />}
          color="var(--color-4)"
          content={
            <ItemArea>
              <ExternalLink
                link="https://www.dropbox.com/s/vx8v5rrqhlxpcba/modpack.zip?dl=1"
                color="var(--color-4)"
              >
                <Text fontSize="22px">Mod Packをダウンロード</Text>
              </ExternalLink>
              <DescriptionArea>
                <Text fontSize="16px">
                  {
                    '再配布可能なMODはzipファイルとしてこちらでまとめて提供しています。'
                  }
                </Text>
                <Text fontSize="16px">
                  {'ライセンスについてはMod Details欄をご覧ください。'}
                </Text>
              </DescriptionArea>
            </ItemArea>
          }
        />
        <MainTemplate
          title="Download Mods"
          icon={<ModIcon />}
          color="var(--color-4)"
          content={
            <ItemArea>
              <Text fontSize="18px">
                以下のMODは再配布が禁止されているMODのため、各自でダウンロードをお願いします。
              </Text>
              {modInfo.mods
                .filter((mod) => !mod.redistribute && !mod.serverOnly)
                .sort((x, y) =>
                  x.clientOnly === y.clientOnly ? 0 : x.clientOnly ? 1 : -1
                )
                .map((mod) => (
                  <ModArea key={mod.name}>
                    <ExternalLink link={mod.link} color="var(--color-4)">
                      <Text fontSize="22px">{mod.name}</Text>
                    </ExternalLink>
                    <ModDescriptionArea>
                      {mod.clientOnly ? (
                        <Text fontSize="14px">（任意・クライアントのみ） </Text>
                      ) : (
                        <Text fontSize="14px">（必須） </Text>
                      )}
                      <Text fontSize="16px">{mod.description}</Text>
                    </ModDescriptionArea>
                  </ModArea>
                ))}
            </ItemArea>
          }
        />
        <MainTemplate
          title="Mod Details"
          icon={<ModIcon />}
          color="var(--color-4)"
          content={
            <ItemArea>
              <Text fontSize="18px">
                サーバーに導入されているMODの一覧です。
              </Text>
              {modInfo.mods.map((mod) => (
                <ModArea key={mod.name}>
                  <ExternalLink link={mod.link} color="var(--color-4)">
                    <Text fontSize="22px">{mod.name}</Text>
                  </ExternalLink>
                  {(mod.license.name || !!mod.license.authors.length) && (
                    <ModDescriptionArea>
                      {mod.license.name && (
                        <ExternalLink
                          link={mod.license.link}
                          color="var(--color-4)"
                        >
                          <Text fontSize="16px">{mod.license.name}</Text>
                        </ExternalLink>
                      )}
                      {mod.license.authors.map((author) => (
                        <ExternalLink
                          link={author.link}
                          color="var(--color-4)"
                          key={author.name}
                        >
                          <Text fontSize="14px">by {author.name}</Text>
                        </ExternalLink>
                      ))}
                    </ModDescriptionArea>
                  )}
                  <ModDescriptionArea>
                    {mod.serverOnly && (
                      <Text fontSize="14px">（サーバーのみ）</Text>
                    )}
                    {mod.clientOnly && (
                      <Text fontSize="14px">（クライアントのみ）</Text>
                    )}
                    <Text fontSize="16px">{mod.description}</Text>
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
  flex-wrap: wrap;
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
