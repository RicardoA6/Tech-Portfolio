'use client'

import { useEffect, useState } from 'react'

// Where the GitHub Action publishes the Playwright report (GitHub Pages)
const REPORT_URL = 'https://ricardoa6.github.io/Tech-Portfolio/'
const RUNS_URL = 'https://github.com/RicardoA6/Tech-Portfolio/actions'

export default function LatestRun() {
  const [run, setRun] = useState(null)
  const [status, setStatus] = useState('loading')

  useEffect(() => {
    fetch(`${REPORT_URL}latest-run.json`, { cache: 'no-store' })
      .then((res) => {
        if (!res.ok) throw new Error(res.status)
        return res.json()
      })
      .then((data) => {
        setRun(data)
        setStatus('ready')
      })
      .catch(() => setStatus('empty'))
  }, [])

  return (
    <div className="ff7-panel ff7-qa-panel">
      <h3 className="ff7-section-title">Automated Regression Run</h3>

      {status === 'loading' && <p className="ff7-qa-intro">Checking the latest run…</p>}

      {status === 'empty' && (
        <p className="ff7-qa-intro">
          No automated run has been published yet. The Playwright suite runs on every push to main, and the
          latest result appears here.
        </p>
      )}

      {status === 'ready' && (
        <>
          <div className="ff7-qa-runhead">
            <span className={run.conclusion === 'passed' ? 'ff7-qa-pass' : 'ff7-qa-fail'}>
              {run.conclusion === 'passed' ? 'Passing' : 'Failing'}
            </span>
            <span className="ff7-qa-rundate">{new Date(run.finishedAt).toLocaleString()}</span>
          </div>
          <div className="ff7-qa-stats">
            <div className="ff7-inset ff7-qa-stat"><b className="ff7-qa-pass">{run.passed}</b><span>passed</span></div>
            <div className="ff7-inset ff7-qa-stat"><b className="ff7-qa-fail">{run.failed}</b><span>failed</span></div>
            <div className="ff7-inset ff7-qa-stat"><b className="ff7-qa-skip">{run.flaky}</b><span>flaky</span></div>
            <div className="ff7-inset ff7-qa-stat"><b>{run.browsers.length}</b><span>{run.browsers.join(', ')}</span></div>
          </div>
        </>
      )}

      <div className="ff7-qa-runlinks">
        <a href={REPORT_URL} target="_blank" rel="noreferrer">Full report</a>
        <a href={RUNS_URL} target="_blank" rel="noreferrer">Run history</a>
        {status === 'ready' && run.commitUrl && (
          <a href={run.commitUrl} target="_blank" rel="noreferrer">Commit {run.commit}</a>
        )}
      </div>
    </div>
  )
}
