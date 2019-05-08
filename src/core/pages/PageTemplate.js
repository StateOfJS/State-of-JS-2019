import React from 'react'
import TextBlock from 'core/blocks/TextBlock'
import PageHeader from 'core/pages/PageHeader'
import { usePageContext } from 'core/helpers/pageContext'
import BlockSwitcher from 'core/components/BlockSwitcher'

const PageTemplate = ({ data = {} }) => {
    const context = usePageContext()

    console.log({ context, data })

    return (
        <>
            <PageHeader />
            {data.introduction && <TextBlock text={data.introduction.html} />}
            {context.blocks &&
                context.blocks.map((block, i) => (
                    <BlockSwitcher key={block.id} block={block} data={data} index={i} />
                ))}
        </>
    )
}

export default PageTemplate